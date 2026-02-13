from pydantic import BaseModel, Field
from uuid import UUID
from datetime import datetime
from typing import Optional


# -----------------------------
# Base Schema
# -----------------------------

class LearningProfileBase(BaseModel):
    current_level: int = Field(ge=1, le=10)
    mastery_score: float = Field(ge=0.0, le=1.0)
    total_questions_answered: int = Field(ge=0)
    accuracy_rate: float = Field(ge=0.0, le=100.0)


# -----------------------------
# Create Schema
# -----------------------------

class LearningProfileCreate(BaseModel):
    user_id: UUID


# -----------------------------
# Update Schema
# -----------------------------

class LearningProfileUpdate(BaseModel):
    current_level: Optional[int] = Field(default=None, ge=1, le=10)
    mastery_score: Optional[float] = Field(default=None, ge=0.0, le=1.0)
    total_questions_answered: Optional[int] = Field(default=None, ge=0)
    accuracy_rate: Optional[float] = Field(default=None, ge=0.0, le=100.0)


# -----------------------------
# Response Schema
# -----------------------------

class LearningProfileResponse(LearningProfileBase):
    id: UUID
    user_id: UUID
    last_activity: datetime
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
