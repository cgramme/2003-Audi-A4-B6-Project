$(window).on('load', function() {
    resizeWindow();
    $('.page-wrap').addClass('fade-in');
});
$(document).ready(function() {
    resizeWindow();

    function getPic() {
        var image = $(this).css('background');
        alert(image);
    };
    $('.main-text').on('click','.right-pic, .left-pic, .main-pic, .small-pic', function() {
        var width3 = $(window).width();
        var image = $(this).attr('src');
        if (width3 >= 800) {
            $('.big-pic').css({
                'background-image': 'url(' + image.slice(0, 10) + 'large' + image.slice(10) + ')'
            });
            $('.big-pic').removeClass('zoom-out').addClass('zoom-in');
        }
    })
    $('.big-pic').on('click', function() {
        $('.big-pic').addClass('zoom-out');
    });
    $('.main-text').on('mouseover','.small-pic', function() {
        var image2 = $(this).attr('src');
        $('.main-pic').attr('src', image2);
    });

    $('.menu > li').on('click', function(){

    });
    var firstOpen = 0;
    $(window).scroll(function() {
        
        if(firstOpen===0){
            menuIn($('.menu li'), 0, 200);
            firstOpen = 1;
        }else{

        }
    });
});


    

function menuIn (list, index, interval) {
    if(index < list.length) {

        var ii = (list.length-1)-index;
        console.log(ii);

         index++;
         $(list[ii]).css({'top': +(ii*2)+'px'});
        $(list[ii]).addClass('fall-in').css({'opacity':'1'}).delay(1000).queue(function(next){
            $(this).removeClass('fall-in');
            next();
        });


        setTimeout(function () {
            menuIn(list, index, interval);
        }, interval);


    }
}

       


function resizeWindow() {
    var width = $(window).width();
    $('.fixed-background-img').width(width).height(width / 1.8).css({'top': '-200px'});
    

    if (width < 850) {
        $('.top-pic').width(width - 20).height(width / 1.7).css({'margin': 'auto'});
        $('.slides, .slide-wrap, #slider1_container').width(width - 20).height(width / 1.5);
    } else {
        $('.top-pic').width(800).height(450).css({'margin': '30px auto'});
        $('#slider1_container, .slides').width(800).height(600);
        $('.slide-wrap').css({'width': '100%'}).height(600);
    }
    if (width < 510) {
        $('.response-pic').width(width - 20).height(width / 1.3).css({'margin-left': '0px'});
        $('.pic-wrap, .response-pic-multi').width(width - 15).height(width / 1.07).css({
            'margin': '5px auto'
        });
        $('.main-pic').width(width - 20).height(width / 1.5);
        $('.small-pic').width(width / 3 - 12).height(width / 4);
    } else {
        $('.response-pic').width(300).height(230).css({
            'margin': '5px'
        });
        $('.pic-wrap, .response-pic-multi').width(305).height(318).css({
            'margin': '30px 5px 2px 5px'
        });
        $('.main-pic').width(300).height(230);
        $('.small-pic').width(95).height(80);
    }
}
$(window).resize(function() {
    resizeWindow();
});