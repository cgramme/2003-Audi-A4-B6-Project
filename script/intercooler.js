$(document).ready(function() { 

	$('.intercooler-list li').on('click', function(){

		var buttonText = $(this).find('p').text().toLowerCase();

		$.ajax({url: "../html/intercoolerText/"+buttonText+".html", success: function(result){
            $(".main-text").html(result);
        }});

		//$(this).addClass('fade-in');
	});

});