var request = require('request');
var cheerio = require('cheerio');
var woodyShow = "http://www.alt987fm.com/onair/the-woody-show-54307/12260855";

request(woodyShow, function(err, resp, body) {
  if(!err && resp.statusCode === 200){
    var player = $("iframe")[13];
    console.log(player);
    //console.log("FUCK",resp);
  }
})