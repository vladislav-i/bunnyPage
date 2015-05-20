// Key:
// 3c6b77ad5d3f5132159c5df0af25daa0

// Secret:
// 03b8e91a4b5a05b3
var bunnyArray = ["bunny", "rabbit", "small bunny"];
var randomTag = Math.floor((Math.random() * 4) + 1);

$( document ).ready(function() {
    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
    {
      tags: bunnyArray[randomTag],
      tagmode: "any",
      format: "json"
    },
    function(data) {
      $.each(data.items, function(i,item){
        $("<img/>").attr("src", item.media.m).prependTo("#results");
        if ( i == 200 ) return false;
      });
    });

});