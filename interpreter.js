var natural = require('natural');



// Tag parts of speech
var Tagger = require("natural").BrillPOSTagger;

var base_folder = "./node_modules/natural/lib/natural/brill_pos_tagger/data/English";
var rules_file = base_folder + "/tr_from_posjs.txt";
var lexicon_file = base_folder + "/lexicon_from_posjs.json";
var default_category = '?';
var tagger = new Tagger(lexicon_file, rules_file, default_category, function(){});
var tokenizer = new natural.WordTokenizer()

var pronouns = ['i', 'he', 'she', 'it', 'they', 'them', 'me', 'us']

// data format:
// {content: 'content text',
// number: '+13604540021',
// photo: null or 'www.photo.com'}

// input: data object
// output: response to be sent back to client
var interpreter = function(data) {
  // split into array
  sentence = tokenizer.tokenize(data.content)
  // add language tags (noun, verb, etc.)
  var taggedSentence = tagger.tag(sentence)
  // Sort out nouns of interests (things to be donated/disposed)
  var itemsToDispose = grabThings(taggedSentence)

  var response = "Here is a link where you can find information about where to get rid of your " + itemsToDispose.join(',') + " : http://www.recycleworks.org/";

  return response
};


module.exports = interpreter


// looks for items that the person wants to know about
function grabThings(array) {
  result = []
  for (var i = 0, len = array.length; i < len; i++) {
    element = array[i]
    // must be Noun
    if (element[1] == 'NN' && !isInArray(element[0].toLowerCase(), pronouns)){
      result.push(element[0])
    }
  }
  return result
}

// Helper
function isInArray(value, array) {
  return array.indexOf(value) > -1;
}