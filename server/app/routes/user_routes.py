from fastapi import APIRouter, Depends,HTTPException, status
# from sqlalchemy.orm import Session
# from server.app.config.database import SessionLocale, engine
# from server.app.data_models import user_models
# from server.app.schemas import user_schema
# from server.app.service import auth_service


# router = APIRouter(prefix = "/auth")


# def get_db():
#     db = SessionLocale()
#     try:
#         yield db
#     finally:
#         db.close()

# @router.post("/auth/register", response_model=user_schema.UserModel)
# def register(user:user_schema.CreateUser, db: Session = Depends(get_db)):
#     get_user = auth_service.check_user(db=get_db, email=user.email)
#     if get_user:
#         HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email already used")
#     user = auth_service.create_user(db=db, user=user)
#     return user
