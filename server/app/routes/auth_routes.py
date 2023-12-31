from fastapi import APIRouter, Depends,HTTPException, status
import sys
import os
sys.path.append(r"C:\Users\WINDOWS\fullstack_with_mysql\Betlove_with_fastapi\server\app\config")
sys.path.append(r"C:\Users\WINDOWS\fullstack_with_mysql\Betlove_with_fastapi\server\app\data_models")
sys.path.append(r"C:\Users\WINDOWS\fullstack_with_mysql\Betlove_with_fastapi\server\app\schemas")
sys.path.append(r"C:\Users\WINDOWS\fullstack_with_mysql\Betlove_with_fastapi\server\app\service")
sys.path.append(r"C:\Users\WINDOWS\fullstack_with_mysql\Betlove_with_fastapi\server\app\pydantic_models")
sys.path.append(r"C:\Users\WINDOWS\fullstack_with_mysql\Betlove_with_fastapi\server\app\utils")
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordRequestForm
from database import SessionLocal
from datetime import timedelta
from typing import Annotated
from token_service import create_access_token
import user_models
import user_schema
import auth_service
import token_models



router = APIRouter(prefix = "/auth")


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/register", response_model=user_schema.UserModel)
def register(user:user_schema.CreateUser, db: Session = Depends(get_db)):
    get_user = auth_service.check_user(db, email=user.email)
    if get_user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email already used")
    user = auth_service.create_user(db=db, user=user)
    return user

@router.post("/login", response_model=token_models.Token)
async def login(form_data: Annotated[OAuth2PasswordRequestForm, Depends()], db:Session=Depends(get_db)):
    user = auth_service.authenticate_user(db=db, username=form_data.username, password=form_data.password)
    expire:timedelta = timedelta(minutes=15)
    secret_key:str | None = os.environ.get('jwt_secrete')
    access_token = create_access_token(data={"sub": user.email}, secret_key=secret_key, expires_delta=expire)

    return {"access_token": access_token, "token_type": "bearer"}