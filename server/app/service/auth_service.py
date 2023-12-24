from models.user_model import UserModel
from fastapi import Depends,status, HTTPException
from models.example_model import EUser
from sqlalchemy.orm import declarative_base
from config.database import engine as db
from service.hash import verify_password
from typing import Annotated
from fastapi.security import OAuth2PasswordBearer
from service.token_service import verify_token
from jose import JWTError


oauth2_scheme = OAuth2PasswordBearer(tokenUrl='token')

class UserInDB(EUser):
    hashed_password: str

def get_user(db:dict, username:str):
    if username in db:
        user_dict = db[username]
        return UserInDB(**user_dict)

def authenticate_user(db, plain_password: str, username:str):
    user = get_user(db, username)

    if not user:
        return False
    
    if not verify_password(plain_password, user.hashed_password):
        return False
    return user
    
async def get_current_user(token: Annotated[str, Depends(oauth2_scheme)]):
    credentials_exception = HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Could not validate credentials", headers={"WWW-Authenticate":"Bearer"})

    try:
        payload = verify_token(token)
        username:str = verify_token.get("sub")

        if username is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception