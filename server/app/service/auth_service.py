import sys,smtplib, uuid, secrets, os
sys.path.append(r"C:\Users\WINDOWS\fullstack_with_mysql\Betlove_with_fastapi\server\app\data_models")
sys.path.append(r"C:\Users\WINDOWS\fullstack_with_mysql\Betlove_with_fastapi\server\app\schemas")
sys.path.append(r"C:\Users\WINDOWS\fullstack_with_mysql\Betlove_with_fastapi\server\app\utils")
import sys
sys.path.append(r"C:\Users\WINDOWS\fullstack_with_mysql\Betlove_with_fastapi\server\app\utils")
sys.path.append(r"C:\Users\WINDOWS\fullstack_with_mysql\Betlove_with_fastapi\server\app\templates")
from sqlalchemy.orm import Session
from typing import Annotated
from fastapi import HTTPException, status, Depends
from fastapi.security import OAuth2PasswordBearer
from dotenv import load_dotenv
load_dotenv()
from token_service import verify_token
from jose import JWTError

import send_email
import user_models
import account_confirm_token
import user_schema
import hash
import confirm_email_template
from datetime import datetime

def check_user(db: Session, email: str):
    return db.query(user_models.User.id).filter(user_models.User.email == email).first()

def login_check_user(db: Session, email: str):
    return db.query(user_models.User).filter(user_models.User.email == email).first()

def authenticate_user(db:Session, username:str, password:str):
    user = login_check_user(db=db, email=username)

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

    get_user_id = check_user(db = db, email=user.email)

    hash_token = secrets.token_urlsafe(32)
    uuid_token = str(uuid.uuid4()).replace("-", "")
    
    to_gen_token = f'{hash_token}_{uuid_token}'

    link = f'http://localhost:5173/auth/confirmaccount/{str(get_user_id[0])}/{to_gen_token}'
    db_token = account_confirm_token.ConfirmAccountTokens(token=to_gen_token, user=db_user)
    db.add(db_token)
    db.commit()
    db.refresh(db_token)

    try:
        send_email.send_mail(recipient = user.email, sender = "cyklonehateka1@gmail.com", subject = "CONFIRM YOUR ACCOUNT", html = confirm_email_template.confirm_email_t(name=user.name, link = link))
    
    except smtplib.SMTPException as e:
        print(e)
        return e
    except Exception as e:
        print(e)
        return e
    return user_schema.ReqResponse(message = "An email has been sent to you, Click on the link in it to confirm your account")

def delete_token(db: Session, token_id:uuid):
    token = db.query(account_confirm_token.ConfirmAccountTokens).filter(account_confirm_token.ConfirmAccountTokens.id == token_id).first()

    if token:
        db.delete(token)
        db.commit()

    else:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Something went wrong")

    
   
def confirm_account(db:Session, token:str, user_id):
    get_uuid = uuid.UUID(user_id)
    return db.query(account_confirm_token.ConfirmAccountTokens).filter(account_confirm_token.ConfirmAccountTokens.token == token, account_confirm_token.ConfirmAccountTokens.user_id == get_uuid).first()

oauth_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")

async def get_user_details(db:Session, token:Annotated[str, Depends(oauth_scheme)]):
    if not token:
            HTTPException(status_code=401, detail="Not authenticated", headers={"WWW-Authenticate": "Bearer"})
    try:

        secret_key:str | None = os.environ.get('jwt_secrete')
        validate_token = verify_token(token=token, secret_key=secret_key)
        user_email = validate_token.get("email")

    except JWTError:
        return HTTPException(status_code=401, detail="Invalid token", headers={"WWW-Authenticate": "Bearer"})

    user = login_check_user(db=db, email=user_email)

    if user is None:
        HTTPException(status_code=401, detail="Not authenticated", headers={"WWW-Authenticate": "Bearer"})

    return user

async def get_current_user(user:Annotated[user_schema.UserModel, Depends(get_user_details)]):
    return user

