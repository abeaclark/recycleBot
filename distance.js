var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

var distance = function(location_a, location_b) {
    var location_a_string = encodeURIComponent(location_a);
    var location_b_string = encodeURIComponent(location_b);

    var host = "https://maps.googleapis.com",
        key = 'AIzaSyAZO6N4WouGfqhpQeZRtG-MsA9diL7G1AQ',
        path = "/maps/api/distancematrix/json?units=imperial&origins=" + location_a
                                                         + "&destinations=" + location_b
                                                         + "&key=" + key;

    xhr.open("GET", host+path, false);
    xhr.send();
    //unfinished
    //return( xhr.responseText.substring(xhr.responseText.indexOf("text")+9, xhr.responseText.indexOf("value")-25));
    console.log( xhr.responseText );
};
module.exports = distance;

distance('Atlanta', 'New York');