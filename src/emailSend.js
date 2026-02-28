const nodemailer = require('nodemailer')


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,     
    pass: process.env.EMAIL_PASS  
  }
})


const sendOtp = async(email,otp) => {
  const imfo = await transporter.sendMail({
    from: `"Gmail Verification" <${process.env.EMAIL}>`,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP is: ${otp}`,
    html: `<b>Your OTP is: ${otp}</b>`
  })
  console.log("Message sent:", info.messageId)
}


module.exports = sendOtp
