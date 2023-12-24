from pydantic import BaseModel

class UserModel(BaseModel):
    name=str
    email:str
    password:str
    mobile_number:str
    country:str
    dob:str