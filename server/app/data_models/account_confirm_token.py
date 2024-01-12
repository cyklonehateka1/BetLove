import sys
sys.path.extend(r"C:\Users\WINDOWS\fullstack_with_mysql\Betlove_with_fastapi\server\app\config")
import uuid
from sqlalchemy import Column, String, UUID,DateTime, ForeignKey,Boolean,func
from database import Base
from datetime import datetime,timedelta
from sqlalchemy.orm import relationship

expiry_date = datetime.now() + timedelta(minutes=30)

class ConfirmAccountTokens(Base):
    __tablename__ = "confirm_account_tokens"
    __table_args__ = {'schema': 'user_schema'}

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, unique=True, index=True, nullable=False)
    token = Column(String, nullable=False, unique=True)
    expires_at= Column(DateTime, default=func.now() + timedelta(minutes=30))
    confirmed= Column(Boolean, default=func.false())
    user_id = Column(UUID(as_uuid=True), ForeignKey('users.id'))

    user = relationship("User", back_populates="confirmation_tokens")