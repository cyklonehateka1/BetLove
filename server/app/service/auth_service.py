from sqlalchemy.orm import Session
from server.app.data_models import user_models
from server.app.schemas import user_schema
from server.app.utils import hash

def check_user(db: Session, email: str):
    return db.query(user_models.User).filter(user_models.User.email == email).first()

def create_user(db:Session, user:user_schema.CreateUser):

    hash_password:str = hash.get_password_hash(user.password)
    db_user = user_models.user(email=user.email, password=hash_password, name=user.name, dob=user.dob, phone_number=user.phone_number)