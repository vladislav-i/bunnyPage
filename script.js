var request = require('request');
var cheerio = require('cheerio');
var jQuery = require('jQuery');
var website = "http://www.alt987fm.com/onair/the-woody-show-54307/12260855";

request(website, function(err, resp, body) {
  if(!err && resp.statusCode === 200){
    var player = $("iframe")[13];
    console.log("FUCK",player);
  }
})