$(document).ready(function() { 

	$('.intercooler-list li').on('click', function(){

		var buttonText = $(this).find('p').text().toLowerCase();
		if(buttonText === "map diy"){buttonText = "mapDiy";}

		$.ajax({url: "../html/intercoolerText/"+buttonText+".html", success: function(result){



            $(".main-text").addClass('fade-out').delay(500).queue(function(next){
	            $(".main-text").html(result).removeClass('fade-out').addClass('fade-in');
	            if($(this).find('p').text().toLowerCase(); === "result"){
	            	$('body').append($("<script src='../script/jssor.js' type='text/javascript'></script>"));
	            }
	            resizeWindow();

	            next();

        	});
        }});

		//$(this).addClass('fade-in');
	});

	


    


});