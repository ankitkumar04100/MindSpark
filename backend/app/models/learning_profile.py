from sqlalchemy import Column, Float, Integer, DateTime, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from datetime import datetime
import uuid

from app.db.base import Base


class LearningProfile(Base):
    __tablename__ = "learning_profiles"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)

    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False)

    current_level = Column(Integer, default=5)
    mastery_score = Column(Float, default=0.0)
    total_questions_answered = Column(Integer, default=0)
    accuracy_rate = Column(Float, default=0.0)

    last_activity = Column(DateTime, default=datetime.utcnow)

    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relationship
    user = relationship("User", back_populates="learning_profile")

    def __repr__(self):
        return (
            f"<LearningProfile(user_id={self.user_id}, "
            f"level={self.current_level}, mastery={self.mastery_score})>"
        )
