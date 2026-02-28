const express = require('express')
const app = express()
app.use(express.json())
//import email sender !
const sendOtp = require('./emailSend.js')
const crypto = require('crypto');

//yha me kaam kerunga iske niche


app.post("/emailVerification", async (req, res) => {
  try {
  const {email} = req.body;
  const otp = crypto.randomInt(100000, 1000000);
  await sendOtp(email,otp)
  res.json({message:"Otp Sent!",email,otp})
    
  } catch (error) {
    console.log("Error:", error) 
    res.status(500).json({ message: "Failed!", error: error.message })
  }
})






//or iske uper kaam kerunga sirf!

module.exports = app
