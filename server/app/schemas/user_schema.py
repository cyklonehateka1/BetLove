from pydantic import BaseModel,UUID4
from datetime import datetime

class UserBase(BaseModel):
    email:str
    name:str
    phone_number:str
    country:str
    dob: datetime

class CreateUser(UserBase):
    password:str
    
class UserModel(UserBase):
    id: UUID4
    balance:int
    dob:datetime

    class Config:
        from_attributes = True