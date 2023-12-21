import uuid
from sqlalchemy import Column, String, Integer, create_engine, Sequence, UUID,DateTime,func
from sqlalchemy.ext.declarative import declared_base
from sqlalchemy.orm import sessionmaker

Base = declared_base()

class User(Base):
    __tablename__="users"
    
    id=Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, unique=True, index=True, nullable=False)
    name=Column(String, index=True, nullable=False)
    email=Column(String, nullable=False, unique=True)
    password=Column(String, nullable=False,  info={'check': 'length(name) >= 6'})
    balance=Column(Integer, default=0, nullable=False)
    country=Column(String, nullable=False, default="gh")
    dob=Column(DateTime, nullable=False)
    phone_number=Column(String, unique=True, nullable=False)
    created_at=Column(DateTime, default=func.now(), onupdate=func.now())