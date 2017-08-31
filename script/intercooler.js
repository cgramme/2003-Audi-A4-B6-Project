$(document).ready(function() { 

	$('.intercooler-list li').on('click', function(){

		var buttonText = $(this).find('p').text().toLowerCase();
		if(buttonText === "map diy"){buttonText = "mapDiy";}

		$.ajax({url: "../html/intercoolerText/"+buttonText+".html", success: function(result){



            $(".main-text").addClass('fade-out').delay(500).queue(function(next){
	            $(".main-text").html(result).removeClass('fade-out').addClass('fade-in');
	            if(buttonText === "result"){
	            	$('body').append($("<script src='../script/jssor.js' type='text/javascript'></script>"));
	            	var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
	            	ScaleSlider();
	            }
	            resizeWindow();

	            next();

        	});
        }});

		//$(this).addClass('fade-in');
	});

	


    


});