from fastapi import Request
from fastapi.security import OAuth2PasswordBearer
import sys
sys.path.append(r"C:\Users\WINDOWS\fullstack_with_mysql\Betlove_with_fastapi\server\app\utils")


async def verify_access_token(request: Request, call_next):
