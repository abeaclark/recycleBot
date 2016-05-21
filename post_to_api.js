var request = require("request");

function curlIt(image){
	var tempFile = image;
	/*var imagePath = request("http://i.imgur.com/diM7Mmu.jpg", function (error, response, body){
																return response.body;
															  });*/
	var exec = require('child_process').exec;
    var arg = 'http://search.craftar.net/v1/search -s -F "token=30dc562ba4c14a60" -F "image="'+tempFile;
    
    exec('curl ' + arg, function (error, stdout, stderr) {
      						 stdout ? console.log(JSON.parse(stdout).results[0].item.name)
      							  	: console.log('YOU DONE MESSED UP: ' + error);
    					});
    
    //console.log(expt);
   // return JSON.parse(stdout).results[0].item.name;
}

curlIt(/*image file goes here*/);