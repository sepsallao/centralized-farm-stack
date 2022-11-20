from fastapi import FastAPI
# from fastapi.responses import JSONResponse

app = FastAPI()

@app.get("/")
def root():
    # return Response({"message":"charaan"})
    return {"message": "charaan"}
    # Run the command
    # example:
    #   $ uvicorn app.main:app --host localhost --port 8000 --reload
    # actual:
    #   $ uvicorn manage:app --host localhost --port 8000 --reload

@app.get("/api")
def api():
    return {"message": "hello"}
    # return JSONResponse({"message": "hello"})
