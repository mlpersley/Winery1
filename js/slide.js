

var count = 1;
var total = 6;

    function image() {
	var picHolder = document.getElementById('slideImg');
	count++;
	if(count > total){count = 1;}
	picHolder.src = "img/slidepic"+ count +".png";
	}



$(document).ready(function() {
    $('ol li').bind('click', function(){   
    var picHolder = document.getElementById('slideImg');
	count++;
	if(count > total){count = 1;}
	picHolder.src = "img/slidepic"+ count +".png";
    });
});