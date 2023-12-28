import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from dotenv import load_dotenv
load_dotenv()

username: str|None = os.environ.get('db_username')
password: str|None = os.environ.get('db_password')
host: str|None = os.environ.get('db_host')
db_name: str|None = os.environ.get('db_name')

print(host)
print(password)
print(db_name)

engine = create_engine(f'postgresql://{username}:{password}@{host}/{db_name}')
print(engine)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
