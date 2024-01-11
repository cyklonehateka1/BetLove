def confirm_email_t()->str:
    return '''
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Account Confirmation</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #ffffff;
                border: 1px solid #e0e0e0;
                border-radius: 5px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
            h2 {
                color: #333;
            }
            p {
                color: #555;
                line-height: 1.6;
            }
            a {
                display: inline-block;
                padding: 10px 20px;
                background-color: #007BFF;
                color: #fff;
                text-decoration: none;
                border-radius: 3px;
            }
            a:hover {
                background-color: #0056b3;
            }
        </style>
    </head>
    <body>

        <div class="container">

            <h2>Welcome to [Betting Site Name]!</h2>

            <p>Hi [User's Name],</p>

            <p>
                Thank you for creating an account with [Betting Site Name]. To start enjoying our services, please confirm your email address by clicking the link below:
            </p>

            <p>
                <a href="[Confirmation Link]">Confirm Your Email</a>
            </p>

            <p>
                If you did not sign up for an account on [Betting Site Name], you can ignore this email.
            </p>

            <p>Best regards,<br>The [Betting Site Name] Team</p>

        </div>

    </body>
    </html>
'''