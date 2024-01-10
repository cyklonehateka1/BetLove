import sys
sys.path.append(r"C:\Users\WINDOWS\fullstack_with_mysql\Betlove_with_fastapi\server\app\data_models")
sys.path.append(r"C:\Users\WINDOWS\fullstack_with_mysql\Betlove_with_fastapi\server\app\schemas")
sys.path.append(r"C:\Users\WINDOWS\fullstack_with_mysql\Betlove_with_fastapi\server\app\utils")
import sys
sys.path.append(r"C:\Users\WINDOWS\fullstack_with_mysql\Betlove_with_fastapi\server\app\utils")
from sqlalchemy.orm import Session
from typing import Annotated
from fastapi import HTTPException, status
import user_models
import user_schema
import hash
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

    changeDate = datetime.strptime(user.dob,"%Y-%m-%d")
    hash_password:str = hash.get_password_hash(user.password)
    db_user = user_models.User(email=user.email, password=hash_password, name=user.name, dob=changeDate, phone_number=user.phone)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


