import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

username: str|None = os.environ.get('db_username')
password: str|None = os.environ.get('db_password')
host: str|None = os.environ.get('db_host')
db_name: str|None = os.environ.get('db_name')

print(username)

engine = create_engine(f'postgresql://{username}:{password}@{host}/{db_name}')

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()