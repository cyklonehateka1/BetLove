from jose import jwt, JWTError
import os
from datetime import timedelta, datetime



ALGORITHM = 'HS256'


def create_access_token(data: dict, secret_key: str | None, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, secret_key, algorithm=ALGORITHM)
    return encoded_jwt

def verify_token(token:str, secret_key:str, algorithms = [ALGORITHM]):
    payload = jwt.decode(token, secret_key, algorithms=algorithms)
    return payload
