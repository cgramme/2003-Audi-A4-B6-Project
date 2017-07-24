$(document).ready(function(){
    resizeWindow();

    $('.top-pic').on('click', function(){alert($('html').width());});
      //slideshow
	  var _SlideshowTransitions = [
            //Custom slide show transitions. You can add as many as you like. Will start from top first.
            {$Duration:1400,x:0.25,$Zoom:1.5,$Easing:{$Left:$Jease$.$InWave,$Zoom:$Jease$.$InSine},$Opacity:2,$ZIndex:-10,$Brother:{$Duration:1400,x:-0.25,$Zoom:1.5,$Easing:{$Left:$Jease$.$InWave,$Zoom:$Jease$.$InSine},$Opacity:2,$ZIndex:-10}}
	   ];
      //start slideshow function
        var options = {
            $AutoPlay: true,
            $Idle: 8000,
            $SlideshowOptions: {
                    $Class: $JssorSlideshowRunner$,
                    $Transitions: _SlideshowTransitions,
                    $TransitionsOrder: 1,
                    $ShowLink: true
                }
        };
        //start slideshow
        var jssor_slider1 = new $JssorSlider$('slider1_container', options);


        function getPic(){
            var image = $(this).css('background');
            alert(image);
            //$('.big-pic').css({'background':'#fff'});
           // $('.big-pic').addClass('zoom-out');
        };

        $('.right-pic, .left-pic').on('click', function(){
            var image = $(this).attr('src');
            $('.big-pic').css({'background-image':'url('+image+')'});
            $('.big-pic').removeClass('zoom-out').addClass('zoom-in');
        })


        $('.big-pic').on('click', function(){
            $('.big-pic').addClass('zoom-out');
        });

});

function resizeWindow(){
    var width = $(window).width();
    if(width < 850){
        $('.top-pic').width(width-20).height(width/1.7).css({'margin':'auto'});
        $('.slides').width(width-20).height(width/1.5).css({'margin-left':'10px'});
    }else{
        $('.child-3d').width(800).height(450).css({'margin':'30px auto'});
        $('.slide-wrap, #slider1_container, .slides').width(800).height(600).css({'margin':'auto'});
    }
}

$(window).resize(function() {
    resizeWindow();
});