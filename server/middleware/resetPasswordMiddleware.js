// resetPasswordMiddleware.js

const nodemailer = require('nodemailer');
const speakeasy = require('speakeasy');

const sendPasswordResetEmail = async (email, otp) => {
    // Create transporter for sending emails
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'debarajmalik07@gmail.com',
            pass: 'vezf akfb diuc zpso'
        }
    });

    // Define email options
    const mailOptions = {
        from: 'debarajmalik07@gmail.com',
        to: email,
        subject: 'Password Reset OTP',
        text: `Your OTP for password reset is: ${otp}`
    };

    // Send email with OTP
    await transporter.sendMail(mailOptions);
};

module.exports = sendPasswordResetEmail;