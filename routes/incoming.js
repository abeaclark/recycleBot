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
  console.log('Request: ', req);
  console.log('Response: ', res);

  sendMessage('+13604640368', 'recieved')
  res.send('ok');
});

module.exports = router;


function sendMessage(recipient_number, message) {
  client.messages.create({
      body: message,
      to: recipient_number,  // Text this number
      from: '+16504450791' // From a valid Twilio number
  }, function(err, message) {
      console.log(message.sid);
  });

}
