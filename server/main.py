import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# from fastapi.responses import JSONResponse

app = FastAPI()

origins = ['https://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

@app.get("/")
def read_root():
    return {"Ping":"Pong"}

@app.get("/api/health-checker")
def health_checker():
    return {"message": "Welcome to FastAPI with MongoDB"}
    # Run the command
    # example:
    #   $ uvicorn app.main:app --host localhost --port 8000 --reload
    # actual:
    #   $ uvicorn manage:app --host localhost --port 8000 --reload

# @app.get("/api")
# def api():
#     return {"message": "hello"}
#     # return JSONResponse({"message": "hello"})
