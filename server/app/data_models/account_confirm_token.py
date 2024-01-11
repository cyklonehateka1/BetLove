import sys
sys.path.extend(r"C:\Users\WINDOWS\fullstack_with_mysql\Betlove_with_fastapi\server\app\config")
import uuid
from sqlalchemy import Column, String, UUID,DateTime, ForeignKey,Boolean
from database import Base
from datetime import datetime,timedelta

expiry_date = datetime.now() + timedelta(minutes=30)

class confirm_email_token(Base):
    __tablename__="confirm_account_tokens"
    __table_args__ = {'schema': 'user_schema'}

    id=Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, unique=True, index=True, nullable=False)
    token=Column(String, nullable=False, unique=True)
    expires_at: Column(DateTime, default=expiry_date)
    confirmed: Column(Boolean, default=False)
    user = Column(UUID(as_uuid=True), ForeignKey('users.id'))