from fastapi import Request, HTTPException
from fastapi.security import OAuth2PasswordBearer
import sys, os
sys.path.append(r"C:\Users\WINDOWS\fullstack_with_mysql\Betlove_with_fastapi\server\app\utils")
import token_service
from dotenv import load_dotenv

load_dotenv()
jwt_sec = os.environ.get("jwt_secrete")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")
async def verify_access_token(request: Request, call_next):
    token = await oauth2_scheme(request=request)

    if not token:
        raise HTTPException(status_code=401, detail="User not authenticated")
    
    validate_token = token_service.verify_token(token, jwt_sec)

    if not validate_token:
        raise HTTPException(status_code=401, detail="User not authorized")
    
    response = call_next(request)

    return response