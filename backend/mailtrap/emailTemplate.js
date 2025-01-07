export const VERIFICATION_EMAIL_TEMPLATE = ` 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
</head>
<body style="
  font-family: 'Roboto', Arial, sans-serif; 
  line-height: 1.6; 
  color: #333; 
  margin: 0; 
  padding: 0 20px;
  height: 100vh; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  border-radius: 10px;
  background: url('https://i.imgur.com/HSpZvs8.jpeg') no-repeat center center;
  background-size: cover;
">
  <div style="
  height: 92vh; 
  width: 100%; /* Full width of the screen */
  /* background: rgba(0, 0, 0, 0.3); Semi-transparent black background */
  background: rgba(220, 38, 38, 0.3); /* Semi-transparent red background */  backdrop-filter: blur(30px); /* Small blur */
  border-radius: 20px; /* Remove rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06); /* Shadow effect */
  overflow: hidden; /* Ensures hidden overflow */
  padding: 20px 20px; /* Padding on y-axis and x-axis */
  margin: 0; /* Remove default margins */
">
    <div style="background: linear-gradient(to right, #ff6a00, #ee0979); padding: 10px; text-align: center; border-radius: 10px;">
      <h1 style="color: white; margin: 0;">Verify Your Email</h1>
    </div>
    <div style="padding: 20px; color: #fff;">
      <p>Hello,</p>
      <p>Thank you for signing up! Your verification code is:</p>
      <div style="text-align: center; margin: 30px 0;">
        <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #FFA500;">{verificationCode}</span>
      </div>
      <p>Enter this code on the verification page to complete your registration.</p>
      <p>This code will expire in 15 minutes for security reasons.</p>
      <p>If you didn't create an account with us, please ignore this email.</p>
      <p>Best regards,<br>       
          <img src="https://i.imgur.com/9x4ILiQ.png" alt="Allcrownworks" style="max-width: 100%; height: auto;"> 
      </p>     
    </div>
    <div style="text-align: center; margin-top: 20px; color: #dad1d1; font-size: 0.8em;">
      <p>This is an automated message, please do not reply to this email.</p>
    </div>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = ` 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
</head> 
<body style="
  font-family: 'Roboto', Arial, sans-serif; 
  line-height: 1.6; 
  color: #333; 
  margin: 0; 
  padding: 0 20px;
  height: 100vh; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  border-radius: 10px;
  background: url('https://i.imgur.com/HSpZvs8.jpeg') no-repeat center center;
  background-size: cover;
">
  <div style="
  height: 92vh; 
  width: 100%; /* Full width of the screen */
  /* background: rgba(0, 0, 0, 0.3); Semi-transparent black background */
  background: rgba(220, 38, 38, 0.3); /* Semi-transparent red background */  backdrop-filter: blur(30px); /* Small blur */
  border-radius: 20px; /* Remove rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06); /* Shadow effect */
  overflow: hidden; /* Ensures hidden overflow */
  padding: 20px 20px; /* Padding on y-axis and x-axis */
  margin: 0; /* Remove default margins */
">
    <div style="background: linear-gradient(to right, #ff6a00, #ee0979); padding: 10px; text-align: center; border-radius: 10px;">
      <h1 style="color: white; margin: 0;">Password Reset Successful</h1>
    </div>
    <div style="padding: 20px; color: #fff;">
      <p>Hello,</p>
      <p>We're writing to confirm that your password has been successfully reset.</p>
      <div style="text-align: center; margin: 30px 0;">
        <div style="background: linear-gradient(to right, #ff6a00, #ee0979); color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
          ✓
        </div>
      </div>
      <p>If you did not initiate this password reset, please contact our support team immediately.</p>
      <p>For security reasons, we recommend that you:</p>
      <ul>
        <li>Use a strong, unique password</li>
        <li>Enable two-factor authentication if available</li>
        <li>Avoid using the same password across multiple sites</li>
      </ul>
      <p>Thank you for helping us keep your account secure.</p>
      <!-- <p>Best regards,<br><strong style="
        background: linear-gradient(to right, #ff6a00, #ee0979);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      ">Allcrownworks</strong>     
      </p> -->
      <p>Best regards,<br>       
        <img src="https://i.imgur.com/9x4ILiQ.png" alt="Allcrownworks" style="max-width: 100%; height: auto;"> 
    </p>   
    </div>
    <div style="text-align: center; margin-top: 20px; color: #dad1d1; font-size: 0.8em;">
      <p>This is an automated message, please do not reply to this email.</p>
    </div>
</div>

  </body>
</html>
`;


export const PASSWORD_RESET_REQUEST_TEMPLATE = ` 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reset Your Password</title>
  </head>
  <body style="
  font-family: 'Roboto', Arial, sans-serif; 
  line-height: 1.6; 
  color: #333; 
  margin: 0; 
  padding: 0 20px;
  height: 100vh; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  border-radius: 10px;
  background: url('https://i.imgur.com/HSpZvs8.jpeg') no-repeat center center;
  background-size: cover;
">
  <div style="
  height: 92vh; 
  width: 100%; /* Full width of the screen */
  /* background: rgba(0, 0, 0, 0.3); Semi-transparent black background */
  background: rgba(220, 38, 38, 0.3); /* Semi-transparent red background */  backdrop-filter: blur(30px); /* Small blur */
  border-radius: 20px; /* Remove rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06); /* Shadow effect */
  overflow: hidden; /* Ensures hidden overflow */
  padding: 20px 20px; /* Padding on y-axis and x-axis */
  margin: 0; /* Remove default margins */
">

      <div
        style="
          background: linear-gradient(to right, #ff6a00, #ee0979);
          padding: 10px;
          text-align: center;
          border-radius: 10px;
        "
      >
        <h1 style="color: white; margin: 0; font-size: 2em">Password Reset</h1>
      </div>
      <div style="padding: 20px; color: #fff">
        <!-- Dark text for better readability -->
        <p style="font-size: 1.1em">Hello,</p>
        <p style="font-size: 1em">
          We received a request to reset your password. If you didn't make this
          request, please ignore this email.
        </p>
        <p style="font-size: 1em">
          To reset your password, click the button below:
        </p>
        <div style="text-align: center; margin: 30px 0">
          <a
            href="{resetURL}"
            style="
              background: linear-gradient(to right, #ff6a00, #ee0979);
              color: white;
              padding: 15px 25px;
              text-decoration: none;
              border-radius: 25px;
              font-weight: bold;
              font-size: 1.2em;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            "
            >Reset Password</a
          >
        </div>
        <p style="font-size: 0.9em; color: #fff">
          This link will expire in 1 hour for security reasons.
        </p>
        <!-- <p style="font-size: 1em; color: #fff">
          Best regards,<br />
          <strong
            style="
              background: linear-gradient(to right, #ff6a00, #ee0979);
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            "
            >Allcrownworks</strong
          >
        </p> -->
        <p>Best regards,<br>       
          <img src="https://i.imgur.com/9x4ILiQ.png" alt="Allcrownworks" style="max-width: 100%; height: auto;"> 
      </p>   
      </div>
      <div
        style="
          text-align: center;
          margin-top: 20px;
          color: #e0d2d2;
          font-size: 0.8em;
        "
      >
        <p>This is an automated message, please do not reply to this email.</p>
      </div>
    </div>
  </body>
</html>
`;
