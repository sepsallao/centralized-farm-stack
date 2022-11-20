from fastapi import FastAPI

api = FastAPI()

@api.get("/api/health-checker")
def health_checker():
    return {"message": "Welcome to FastAPI with MongoDB"}
    # Run the command
    # example:
    #   $ uvicorn app.main:app --host localhost --port 8000 --reload
    # actual:
    #   $ uvicorn manage:app --host localhost --port 8000 --reload
