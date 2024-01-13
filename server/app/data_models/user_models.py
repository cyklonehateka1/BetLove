import sys
sys.path.extend(r"C:\Users\WINDOWS\fullstack_with_mysql\Betlove_with_fastapi\server\app\config")
import uuid
from sqlalchemy import Column, String, Integer, UUID,DateTime,func,Boolean, text
from database import Base
from sqlalchemy.orm import relationship


class User(Base):
    __tablename__="users"
    __table_args__ = {'schema': 'user_schema'}
    
    id=Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, unique=True, index=True, nullable=False)
    name=Column(String, index=True, nullable=False)
    email=Column(String, nullable=False, unique=True)
    password=Column(String, nullable=False,  info={'check': 'length(name) >= 6'})
    balance=Column(Integer, default=0, nullable=False)
    country=Column(String, nullable=False, default="gh")
    dob=Column(DateTime, nullable=False)
    phone_number=Column(String, unique=True, nullable=False)
    created_at=Column(DateTime, default=func.now())
    updated_at=Column(DateTime, default=func.now(), onupdate=func.now())
    confirmed_account=Column(Boolean, default=False, nullable=False)
    confirmation_tokens = relationship("ConfirmAccountTokens", back_populates="user")

