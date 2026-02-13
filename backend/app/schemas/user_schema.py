from pydantic import BaseModel, EmailStr, Field
from uuid import UUID
from datetime import datetime
from typing import Optional


# -----------------------------
# Base Schema
# -----------------------------

class UserBase(BaseModel):
    email: EmailStr
    role: str = Field(default="student")


# -----------------------------
# Create User (Request)
# -----------------------------

class UserCreate(UserBase):
    password: str = Field(min_length=8)


# -----------------------------
# Update User
# -----------------------------

class UserUpdate(BaseModel):
    email: Optional[EmailStr] = None
    role: Optional[str] = None
    is_active: Optional[bool] = None


# -----------------------------
# Public Response Schema
# -----------------------------

class UserResponse(UserBase):
    id: UUID
    is_active: bool
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True  # ORM mode (Pydantic v2)
