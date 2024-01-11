import sys
sys.path.append(r"C:\Users\WINDOWS\fullstack_with_mysql\Betlove_with_fastapi\server\app\data_models")
sys.path.append(r"C:\Users\WINDOWS\fullstack_with_mysql\Betlove_with_fastapi\server\app\schemas")
sys.path.append(r"C:\Users\WINDOWS\fullstack_with_mysql\Betlove_with_fastapi\server\app\utils")
import sys
sys.path.append(r"C:\Users\WINDOWS\fullstack_with_mysql\Betlove_with_fastapi\server\app\utils")
sys.path.append(r"C:\Users\WINDOWS\fullstack_with_mysql\Betlove_with_fastapi\server\app\templates")
from sqlalchemy.orm import Session
from typing import Annotated
from fastapi import HTTPException, status
import send_email
import user_models
import user_schema
import hash
import confirm_email_template
from datetime import datetime


def check_user(db: Session, email: str):
    return db.query(user_models.User).filter(user_models.User.email == email).first()

def authenticate_user(db:Session, username:str, password:str):
    user = check_user(db=db, email=username)

    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="No user found")
    
    if not hash.verify_password(plain_password=password, hashed_password=user.password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Wrong password")
    return user

    

def create_user(db:Session, user:user_schema.CreateUser):
    hash_password:str = hash.get_password_hash(user.password)
    db_user = user_models.User(email=user.email, password=hash_password, name=user.name, dob=user.dob, phone_number=user.phone_number)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)

    to_gen_token = hash.get_password_hash(password = user.email + datetime.now().strftime("%Y-%m-%d %H:%M:%S") + user.password)

    link = f'http://127.0.0.1:8000/auth/signup/confirmaccount/{to_gen_token}'

    send_email.send_mail(recipient = user.email, sender = "cyklonehateka1@gmail.com", subject = "CONFIRM YOUR ACCOUNT", html = confirm_email_template.confirm_email_t(name=user.name, link = link))

    return user_schema.RegisterResponse(message = "An email has been sent to you, Click on the link in it to confirm your account")


