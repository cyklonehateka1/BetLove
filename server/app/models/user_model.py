from pydantic import BaseModel

class userModel(BaseModel):
    name=str
    email:str
    password:str
    mobile_number:str
    country:str
    dob:str