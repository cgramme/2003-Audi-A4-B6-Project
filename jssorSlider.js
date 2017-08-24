$(document).ready(function() {
    
    var _SlideshowTransitions = [{
        $Duration: 1400,
        x: 0.25,
        $Zoom: 1.5,
        $Easing: {
            $Left: $Jease$.$InWave,
            $Zoom: $Jease$.$InSine
        },
        $Opacity: 2,
        $ZIndex: -10,
        $Brother: {
            $Duration: 1400,
            x: -0.25,
            $Zoom: 1.5,
            $Easing: {
                $Left: $Jease$.$InWave,
                $Zoom: $Jease$.$InSine
            },
            $Opacity: 2,
            $ZIndex: -10
        }
    }];
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
    var jssor_slider1 = new $JssorSlider$('slider1_container', options);

});