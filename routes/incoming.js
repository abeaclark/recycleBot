var express = require('express');
var router = express.Router();

// instantiate twilio
var twilio = require('twilio');
var accountSid = process.env.twilio_id;
var authToken = process.env.twilio_key;
var client = new twilio.RestClient(accountSid, authToken);


router.get('/', function(req, res, next) {
  res.send('Only Post requests accepted');
});

router.post('/', function(req, res, next) {


  console.log(req.body.MediaUrl);
  console.log(req.body.MediaUrl[0]);
  // data = parseIncomingMessage(req)
  // response =


  // sendMessage(data.content, response)
  // res.send('ok');
});

module.exports = router;

// input = incoming post request
// output = {content: 'content text', number: '+13604540021'}
function parseIncomingMessage(req){
  textContent = req.body.Body;
  textFromNumber = req.body.From;
  return {content: textContent, number: textFromNumber}
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
