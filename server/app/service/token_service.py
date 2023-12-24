# from passlib.context import CryptContext
from jose import jwt, JWTError
# import os
from datetime import timedelta, datetime

# SECRET_KEY = os.environ.get('jwt_secrete')
SECRET_KEY = "hell"

ALGORITHM = 'HS256'


def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def verify_token(token:str, secret_key:str = SECRET_KEY, algorithms = [ALGORITHM]):
    payload = jwt.decode(token)
    return payload
# pwd_context = CryptContext(schemes=['bcrypt'], deprecated='auto')

# def verify_password(plain:str, hash:str)->bool:
#     return pwd_context.verify(plain, hash)

# def get_hash(plain:str):
#     return pwd_context.hash(plain)

# def get_jwt_username(token:str)->str | None:
#     try:
#         payload = jwt.decode(token, SECRETE, algorithms=[ALGORITHM])
#         if not (username := payload.get('sub')):
#             return None
#     except jwt.JWTError:
#         return None
#     return username

# 