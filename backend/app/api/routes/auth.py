from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel, EmailStr
from passlib.context import CryptContext
from datetime import datetime, timedelta
from jose import jwt

router = APIRouter(prefix="/auth", tags=["Authentication"])

SECRET_KEY = "SUPER_SECRET_KEY"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# -----------------------------
# Models
# -----------------------------

class RegisterRequest(BaseModel):
    email: EmailStr
    password: str
    role: str


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str


# -----------------------------
# Utility
# -----------------------------

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)


# -----------------------------
# Routes
# -----------------------------

@router.post("/register")
async def register(payload: RegisterRequest):
    hashed_password = pwd_context.hash(payload.password)

    # In production → Save to database
    return {
        "message": "User registered successfully",
        "email": payload.email,
        "role": payload.role
    }


@router.post("/login", response_model=TokenResponse)
async def login(payload: LoginRequest):
    # In production → Validate from database
    fake_user_password = pwd_context.hash("password")

    if not pwd_context.verify(payload.password, fake_user_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_access_token({"sub": payload.email})

    return {
        "access_token": token,
        "token_type": "bearer"
    }
