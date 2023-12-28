from fastapi import FastAPI
import uvicorn
from dotenv import load_dotenv
load_dotenv()

from routes import auth_routes

app = FastAPI()

app.include_router(auth_routes.router)

if __name__ == '__main__':
    uvicorn.run("main:app", reload=True)