$(window).on('load', function () {
    resizeWindow();
    $('.page-wrap').addClass('fade-in');
});

$(document).ready(function(){
    resizeWindow();

    //$('.top-pic').on('click', function(){alert($('html').width());});
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

        $('.right-pic, .left-pic, .main-pic, .small-pic').on('click', function(){
            var width3 = $(window).width();
            var image = $(this).attr('src');
            if(width3 >= 800){
                $('.big-pic').css({'background-image':'url('+image.slice(0, 7)+'large'+image.slice(7)+')'});
                $('.big-pic').removeClass('zoom-out').addClass('zoom-in');
            }
        })


        $('.big-pic').on('click', function(){
            $('.big-pic').addClass('zoom-out');
        });

        $('.small-pic').mouseover(function(){
            var image2 = $(this).attr('src');
            $('.main-pic').attr('src',image2);
        });

});

function resizeWindow(){
    var width = $(window).width();
    if(width < 850){
        $('.top-pic').width(width-20).height(width/1.7).css({'margin':'auto'});
        $('.slides, .slide-wrap, #slider1_container').width(width-20).height(width/1.5);
    }else{
        $('.top-pic').width(800).height(450).css({'margin':'30px auto'});
        $('#slider1_container, .slides').width(800).height(600);
        $('.slide-wrap').css({'width':'100%'}).height(600);
    }

    if(width < 510){
        $('.left-pic, .right-pic').width(width-20).height(width/1.3).css({'margin-left':'0px'});
        $('.pic-wrap').width(width-15).height(width/1.07).css({'margin':'5px auto'});
        $('.main-pic').width(width-20).height(width/1.5);
        $('.small-pic').width(width/3-12).height(width/4);
    }else{
        $('.left-pic, .right-pic').width(300).height(230).css({'margin':'5px'});
        $('.pic-wrap').width(305).height(318).css({'margin':'30px 5px 2px 5px'});
        $('.main-pic').width(300).height(230);
        $('.small-pic').width(95).height(80);
    }
}

$(window).resize(function() {
    resizeWindow();
});