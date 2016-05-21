var https = require("https");

var distance = function(location_a, location_b){
  location_a_string = encodeURIComponent(location_a);
  location_b_string = encodeURIComponent(location_b);

  console.log(location_b_string)
  console.log(location_a_string)

  base_url = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial'

  key='AIzaSyAZO6N4WouGfqhpQeZRtG-MsA9diL7G1AQ'

  request_url = base_url + '&origins=' + location_a_string + '&destinations=' + location_b_string

  https.get(request_url, (res) => {
    // console.log('statusCode: ', res.statusCode);
    // console.log('headers: ', res.headers);

    res.on('data', (d) => {
      process.stdout.write(d);
      // console.log(d['rows'][0]['elements']['distance'])
    });

  }).on('error', (e) => {
    console.error(e);
  });

}

module.exports = distance

distance('3605 Arbor Dr SE, Lacey WA 98503', '65 Ora Way #202, San Francisco, CA 94131')