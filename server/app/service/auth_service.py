import sys
sys.path.append(r"C:\Users\WINDOWS\fullstack_with_mysql\Betlove_with_fastapi\server\app\data_models")
sys.path.append(r"C:\Users\WINDOWS\fullstack_with_mysql\Betlove_with_fastapi\server\app\schemas")
sys.path.append(r"C:\Users\WINDOWS\fullstack_with_mysql\Betlove_with_fastapi\server\app\utils")
from sqlalchemy.orm import Session
import user_models
import user_schema
import hash

def check_user(db: Session, email: str):
    return db.query(user_models.User).filter(user_models.User.email == email).first()

def create_user(db:Session, user:user_schema.CreateUser):

    hash_password:str = hash.get_password_hash(user.password)
    db_user = user_models.User(email=user.email, password=hash_password, name=user.name, dob=user.dob, phone_number=user.phone_number)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user