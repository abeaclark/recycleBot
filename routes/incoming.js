var express = require('express');
var router = express.Router();
var interpreter = require('../interpreter')
var users = require('./database').users

// instantiate twilio
var twilio = require('twilio');
var accountSid = process.env.twilio_id;
var authToken = process.env.twilio_key;
var client = new twilio.RestClient(accountSid, authToken);


router.get('/', function(req, res, next) {
  res.send('Only Post requests accepted');
});

router.post('/', function(req, res, next) {
  data = parseIncomingMessage(req)
  console.log('data recieved')
  response = interpreter(data)
  console.log('response interpreted')
  sendMessage(data.number, response)
  console.log('message sent')
  res.send('ok');
});

module.exports = router;

// input = incoming post request
// output = {content: 'content text', number: '+13604540021', photo: null or 'www.photo.com'}
function parseIncomingMessage(req){
  textContent = req.body.Body;
  textFromNumber = req.body.From;
  photoUrl = null
  user = findOrCreateUser(textFromNumber)

  if (req.body.MediaUrl0) {
    photoUrl = req.body.MediaUrl0
  }

  return {content: textContent, number: textFromNumber, photoUrl: photoUrl, user: user}
}


// input = number, message
// output = sends message via twilio API
function sendMessage(recipient_number, message) {
  client.messages.create({
      body: message,
      to: recipient_number,  // Text this number
      from: '+16504450791' // From a valid Twilio number
  }, function(err, message) {
      console.log(message.sid);
  });

}


function determineResponse(data) {
  text = data.content

  // determine if picture message
  if (data.photoUrl) {
    // handle photo response
  } else {
    return interpreter(data)
  }

}

function findOrCreateUser(phoneNumber){
  if(users[phoneNumber]){
    return users[phoneNumber]
  }else{
    users[phoneNumber] = new User(phoneNumber)
    return users[phoneNumber]
  }
}

function User(phoneNumber){
  return {
    phoneNumber: phoneNumber,
    zipCode: null,
    itemsToDispose = null
  }
}