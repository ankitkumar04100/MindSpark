from pydantic import BaseSettings


class Settings(BaseSettings):
    PROJECT_NAME: str = "AdaptiveAI Learning Platform"
    VERSION: str = "1.0.0"

    SECRET_KEY: str = "CHANGE_THIS_IN_PRODUCTION"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60

    BACKEND_CORS_ORIGINS: list[str] = ["*"]

    DATABASE_URL: str = "sqlite:///./adaptive.db"

    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()
