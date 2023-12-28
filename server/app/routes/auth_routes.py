from fastapi import APIRouter, Depends,HTTPException, status
import sys
sys.path.append(r"C:\Users\WINDOWS\fullstack_with_mysql\Betlove_with_fastapi\server\app\config")
sys.path.append(r"C:\Users\WINDOWS\fullstack_with_mysql\Betlove_with_fastapi\server\app\data_models")
sys.path.append(r"C:\Users\WINDOWS\fullstack_with_mysql\Betlove_with_fastapi\server\app\schemas")
sys.path.append(r"C:\Users\WINDOWS\fullstack_with_mysql\Betlove_with_fastapi\server\app\service")
from sqlalchemy.orm import Session
from database import SessionLocal, engine
import user_models
import user_schema
import auth_service



router = APIRouter(prefix = "/auth")


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/auth/register", response_model=user_schema.UserModel)
def register(user:user_schema.CreateUser, db: Session = Depends(get_db)):
    get_user = auth_service.check_user(db=get_db, email=user.email)
    if get_user:
        HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email already used")
    user = auth_service.create_user(db=db, user=user)
    return user

