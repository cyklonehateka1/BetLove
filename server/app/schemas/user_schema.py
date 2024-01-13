from pydantic import BaseModel,UUID4
from datetime import date

class UserBase(BaseModel):
    email:str
    name:str
    phone_number:str
    dob: date

class CreateUser(UserBase):
    password:str

class ReqResponse(BaseModel):
    message: str

    
class UserModel(UserBase):
    id: UUID4
    balance:int

    class Config:
        from_attributes = True
