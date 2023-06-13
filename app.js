const express = require('express')
const twilio = require('twilio')
const dotenv = require('dotenv')
const app = express()
dotenv.config()
function sendSMS(){
    const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN)
    return client.messages
    .create({body: 'Hey this is a message', from: '+14027519632', to: process.env.PHONE_NUMBER})
    .then(message =>{
        console.log(message, "Message sent")
    
    .catch(err => {
        console.log(err, "Message NOT sent")
    })
})
}
sendSMS()

app.listen(5000, ()=> console.log('Listening at port 5000'))