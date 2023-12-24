from fastapi import FastAPI
import uvicorn
from dotenv import load_dotenv

load_dotenv()
app = FastAPI()

if __name__ == '__main__':
    uvicorn.run("main:app", reload=True)