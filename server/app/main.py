from fastapi import FastAPI
import uvicorn
from dotenv import load_dotenv
from routes import eauth_routes

load_dotenv()
app = FastAPI()

app.include_router(eauth_routes.router)

if __name__ == '__main__':
    uvicorn.run("main:app", reload=True)