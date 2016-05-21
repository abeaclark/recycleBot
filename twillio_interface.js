var twilio = require('twilio');

var accountSid = process.env.twilio_id;
var authToken = process.env.twilio_key;

var client = new twilio.RestClient(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node',
    to: '+3604640368',  // Text this number
    from: '+12345678901' // From a valid Twilio number
}, function(err, message) {
    console.log(message.sid);
});