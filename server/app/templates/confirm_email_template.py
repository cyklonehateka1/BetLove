def confirm_email_t(name:str, link:str)->str:
    return f'''
<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Account Confirmation</title>
        </head>
        <body style="font-family: 'Arial', sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">

            <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 5px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">

                <h2 style="color: #333;">Welcome to BetLove!</h2>

                <p style="color: #555; line-height: 1.6;">Hi {name.split(' ')[0]},</p>

                <p style="color: #555; line-height: 1.6;">
                    Thank you for creating an account with BetLove. To start enjoying our services, please confirm your email address by clicking the link below:
                </p>

                <p style="margin-bottom: 20px;">
                    <a href="{link}" style="display: inline-block; padding: 10px 20px; background-color: #007BFF; color: #fff; text-decoration: none; border-radius: 3px;">Confirm Your Email</a>
                </p>

                <p style="color: #555; line-height: 1.6;">
                    If you did not sign up for an account on BetLove, you can ignore this email.
                </p>

                <p style="color: #555; line-height: 1.6;">Best regards,<br>The BetLove Team</p>

            </div>

        </body>
    </html>
'''