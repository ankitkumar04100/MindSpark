"""
AdaptiveAI Learning Platform
Enterprise-Level FastAPI Backend
Production-Ready Architecture
"""

from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.middleware.gzip import GZipMiddleware
from pydantic import BaseModel
from typing import List, Dict
import time
import logging

# --------------------------------------------------
# App Initialization
# --------------------------------------------------

app = FastAPI(
    title="AdaptiveAI Learning API",
    description="AI-powered adaptive learning backend service",
    version="1.0.0",
)

# --------------------------------------------------
# Middleware Configuration
# --------------------------------------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to frontend domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_middleware(GZipMiddleware, minimum_size=1000)

# --------------------------------------------------
# Logging Setup
# --------------------------------------------------

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("adaptive-ai-backend")

# --------------------------------------------------
# Health Check
# --------------------------------------------------

@app.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": time.time()}


# --------------------------------------------------
# AI Adaptive Endpoint
# --------------------------------------------------

class AdaptiveRequest(BaseModel):
    studentId: str
    topic: str
    performance: float


class AdaptiveResponse(BaseModel):
    nextDifficulty: int
    recommendedTopics: List[str]
    motivationalMessage: str


@app.post("/ai/adaptive", response_model=AdaptiveResponse)
async def adaptive_engine(payload: AdaptiveRequest):
    """
    AI Difficulty Adjustment Logic
    """

    performance = payload.performance

    if performance > 0.8:
        difficulty = 8
        message = "Outstanding progress! Let's level up."
    elif performance > 0.5:
        difficulty = 6
        message = "Good job! Keep pushing forward."
    else:
        difficulty = 4
        message = "Don't worry. Practice makes perfect."

    recommended = [
        payload.topic,
        "Advanced Concepts",
        "Problem Solving"
    ]

    logger.info(f"Adaptive engine triggered for {payload.studentId}")

    return AdaptiveResponse(
        nextDifficulty=difficulty,
        recommendedTopics=recommended,
        motivationalMessage=message
    )


# --------------------------------------------------
# Analytics Batch Endpoint
# --------------------------------------------------

class AnalyticsEvent(BaseModel):
    event: str
    metadata: Dict = {}
    timestamp: float


class AnalyticsBatch(BaseModel):
    events: List[AnalyticsEvent]


@app.post("/analytics/batch")
async def analytics_batch(data: AnalyticsBatch):
    """
    Batch analytics ingestion endpoint
    """
    logger.info(f"Received {len(data.events)} analytics events")

    # In production → store in DB / Data Warehouse
    return {"status": "received", "count": len(data.events)}


# --------------------------------------------------
# Global Exception Handler
# --------------------------------------------------

@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    logger.error(f"Unhandled error: {str(exc)}")

    return JSONResponse(
        status_code=500,
        content={"message": "Internal server error"},
    )
