import smtplib,ssl
import os
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from dotenv import load_dotenv
load_dotenv()

user_email: str|None = os.environ.get('my_email')
email_password: str|None = os.environ.get('email_password')

email_to = "emmanuelhateka1@gmail.com"

email_message: MIMEMultipart = MIMEMultipart()

email_message['From'] = user_email
email_message['To'] = email_to
email_message['Subject'] = f'Report email - {date_str}'