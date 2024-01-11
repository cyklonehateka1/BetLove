import smtplib,ssl
import os
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from dotenv import load_dotenv
load_dotenv()


user_email: str|None = os.environ.get('my_email')
email_password: str|None = os.environ.get('email_password')


def send_mail(recipient: str, sender:str, subject: str, html: str):
    try:
        email_message: MIMEMultipart = MIMEMultipart()
        email_message['To'] = recipient
        email_message['Subject'] = subject
        email_message.attach(MIMEText(html, "html"))
        email_message['From'] = sender

        email_string = email_message.as_string()

        context = ssl.create_default_context()
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
            server.login(user_email, email_password)
            server.sendmail(sender, recipient, email_string)
    except smtplib.SMTPException as e:
        print(e)
        return e

    except Exception as e:
        print(e)
        return e
