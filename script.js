$(window).load(function(){
    resizeWindow();
	
	$('body').addClass('fade-in');

    setTimeout(function(){
        if($(window).width() >= 400){
            $('.dot').addClass('dot-in');
            $('.menu > ul').addClass('menu-in');
        }else{
            $('.menu > ul').addClass('menu-in-small');
        }


    },500);
	window.loaded = true;

    animateSnow();
});

$(document).ready(function(){
    resizeWindow();
});

$('.projects').on('click', function(){
    $(window).scrollTop($('.samples-text').offset().top-25);
});

$('.contact').on('click', function(){
    $('.pop-up').show().addClass('pop-in');
});
$('.close').on('click', function(){
    $('.pop-up').removeClass('pop-in').hide();
});


$(document).on({
    mouseover: function () {
        $(this).find('.child-3d').css({'transition':'transform 1s','transform' : 'rotateY(180deg)'});
    },
    mouseleave: function () {
       $(this).find('.child-3d').css({'transform' : 'rotateY(0deg)'});
    }
}, '.parent-3d');


$(window).scroll(function () { 
    var width = $(window).width();
    var scrollDistance = ($(this).scrollTop()/1.7);

    if(width >= 1200){
        $('.background-top-image').css({'top' : (scrollDistance)+"px"});


        if($(window).scrollTop() < 450){
            $('.first-row').css({'top' : -(($(this).scrollTop()/6)+100)+"px"}); 
        }

    }else{
        $('.background-top-image').css({'top' : "0px"});
        $('.first-row').css({'top' : '-125px'}); 
    }

    if($(window).scrollTop() < 300){
        $('.top-image-fade').css({'opacity' : $(window).scrollTop()/500}); 
    }


    //$('.name-under-text').text($(window).scrollTop());


   //$('.background-top-image').css({'top' : scrollDistance+"px"}); 

   

   //$('.background-top').css({'transform' : 'translateY('+($(this).scrollTop()/2)+'px)'});

   //$('.background-top').css({'background-position' : '0px '+($(this).scrollTop()/2)+'px'});


   //$('.mountains').css({'top' : -($(this).scrollTop()/20)+"px"}); 

   if($('body').scrollTop() > 700 && width > 1200){
        $('.menu').addClass('opacity-in');
   }else if($('body').scrollTop() > 500 && width <= 1200 && width > 800){
        $('.menu').addClass('opacity-in');
   }else if($('body').scrollTop() > 350 && width < 800 && width <= 800){
        $('.menu').addClass('opacity-in');
   }


   

});



function resizeWindow() {
    var width = $(window).width();

    var mountainWidth = ($(window).width()/1350);

    if(window.loaded){
        if($(window).width() >= 400){
            $('.dot').addClass('dot-in');
            $('.menu > ul').removeClass('menu-in-small').addClass('menu-in');
        }else{
            $('.dot').removeClass('dot-in');
            $('.menu > ul').removeClass('menu-in').addClass('menu-in-small');
        }
    }
    

    $('.first-row, .second-row').css({'transform':'scale('+(mountainWidth)+')'});
   
  
    $('.child-3d').css({'height' : $('.child-3d').width()+"px"});
   
}
$(window).resize(function() {
    resizeWindow();
    
});

function animateSnow() {
    var size = Math.floor(Math.random()*(70)+20);
    var speed = (500000/size);
    var maxWidth = $(window).width();
    var choosenWidth = Math.floor(Math.random()*(maxWidth)-50);
    var choosenInterval = Math.floor(Math.random()*(500)+500);
    console.log("number= "+Math.floor(Math.random()*4+1));
    $("<div id='snow-anima"+Math.floor(Math.random()*4+1)+"'></div>").css({'left':+choosenWidth+'px',
        'top':'-10px',
        'height':+size+'px',
        'width':+size+'px',
    }).animate({top: "100%"}, speed, "linear", function(){$(this).remove();}).prependTo('div.background-top').addClass('snow'+Math.floor(Math.random()*2+1));
    setTimeout(function(){
        animateSnow(100);
    },choosenInterval);
}