from pydantic import BaseModel

class UserBase(BaseModel):
    email:str

class CreateUser(UserBase):
    password:str
    
class UserModel(UserBase):
    id: int
    name:str
    mobile_number:str
    country:str
    dob:str

    class Config:
        orm_mode = True