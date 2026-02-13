"""
Common backend utility helpers
Reusable across services, routes, and models
"""

import uuid
import hashlib
import time
from datetime import datetime
from typing import Any, Dict


# --------------------------------------------------
# ID Utilities
# --------------------------------------------------

def generate_uuid() -> uuid.UUID:
    """Generate secure UUID4"""
    return uuid.uuid4()


def generate_trace_id() -> str:
    """Generate request trace ID for logging"""
    return f"trace_{uuid.uuid4().hex}"


# --------------------------------------------------
# Timestamp Utilities
# --------------------------------------------------

def utc_now() -> datetime:
    """Return current UTC time"""
    return datetime.utcnow()


def current_timestamp() -> float:
    """Return current Unix timestamp"""
    return time.time()


# --------------------------------------------------
# Security Utilities
# --------------------------------------------------

def hash_string(value: str) -> str:
    """
    SHA256 hash utility (non-password use only)
    Example: hashing analytics payload IDs
    """
    return hashlib.sha256(value.encode()).hexdigest()


# --------------------------------------------------
# Pagination Helper
# --------------------------------------------------

def paginate_query(query, page: int = 1, page_size: int = 10):
    """
    Apply pagination to SQLAlchemy query
    """
    offset = (page - 1) * page_size
    return query.offset(offset).limit(page_size)


# --------------------------------------------------
# Safe Response Formatter
# --------------------------------------------------

def success_response(data: Any, message: str = "Success") -> Dict:
    return {
        "status": "success",
        "message": message,
        "data": data,
        "timestamp": current_timestamp()
    }


def error_response(message: str = "Error") -> Dict:
    return {
        "status": "error",
        "message": message,
        "timestamp": current_timestamp()
    }


# --------------------------------------------------
# Performance Timer (for debugging AI logic)
# --------------------------------------------------

class PerformanceTimer:
    """
    Context manager for performance monitoring
    """

    def __init__(self, label: str = "Operation"):
        self.label = label
        self.start_time = None

    def __enter__(self):
        self.start_time = time.time()
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        duration = round(time.time() - self.start_time, 4)
        print(f"[PERF] {self.label} completed in {duration}s")
