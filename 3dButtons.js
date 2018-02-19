
var boxSize=250;	//boxSize should be set to the size of your animated element.
var scaleSize=1; 	//scaleSize should be set to desired amount of zoom on hover.
var scale3d=30;		//scale3d should be set to the amount of 3d effect on cursor hover.
$(document).mousemove(function(e){
    var divPos={};
    var offset;
    var divXpos;
    var divYpos;
    if($(e.target).attr('class') == "child-3d"){
        offset = $(e.target).parent().offset();
        divPos = {
            left: e.pageX - offset.left,
            top: e.pageY - offset.top
        };
        if(divPos.top>boxSize/2){
            divXpos = (divPos.top-boxSize/2)/(boxSize/scale3d);
            divYpos = -(divPos.left-boxSize/2)/(boxSize/scale3d);
        }else{
            divXpos = -((boxSize/2)-divPos.top)/(boxSize/scale3d);
            divYpos = ((boxSize/2)-divPos.left)/(boxSize/scale3d);
        }
        $('.child-3d').css({'transform':'rotateY(0deg) rotateX(0deg)','-webkit-transform':'rotateY(0deg) rotateX(0deg)'});
        $('li').css({'z-index':'1'});
        $(e.target).parents('li').css({'z-index':'10'});
        $(e.target).css({'transform':'rotateY('+divYpos+'deg) rotateX('+divXpos+'deg) scale('+scaleSize+')',
            ' -webkit-transform':'rotateY('+divYpos+'deg) rotateX('+divXpos+'deg) scale('+scaleSize+')'});
    }else{
        $('.child-3d').css({'transform':'rotateY(0deg) rotateX(0deg)','-webkit-transform':'rotateY(0deg) rotateX(0deg)'});
        $('li').css({'z-index':'1'});
    }
});