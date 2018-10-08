$(document).ready(function() {
	

	$.ajax({
	    headers: {
	      	"X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V", 
	    	Accept: "application/json",
	      	"Content-Type": "application/x-www-form-urlencoded"
	    },    
	    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',  
	    success: function(data) {

	    	var quote = data[0].quote;
	    	var author = data[0].author
	    	$("#total-quote").addClass('animated fadeInDown');
	    	$("#quote").text("\""+quote+"\"");
	    	$("#author").text("- "+author);
	    	$("#twitter-button").attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + quote + '" ' +"- "+ author));

	    }
	});

	$("#quote-button").on("click", function(){

		$("#total-quote").removeClass('animated fadeInDown');

		$.ajax({
		    headers: {
		      	"X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V", 
		    	Accept: "application/json",
		      	"Content-Type": "application/x-www-form-urlencoded"
		    },    
		    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',  
		    success: function(data) {

		    	var quote = data[0].quote;
		    	var author = data[0].author

		    	$("#total-quote").addClass('animated fadeInDown');
		    	$("#quote").text("\""+quote+"\"");
		    	$("#author").text("- "+author);
		    	$("#twitter-button").attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + quote + '" ' +"- " + author));
		    }
		});
	});
});
