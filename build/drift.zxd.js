(function($){


    function RandomNumBoth(Min,Max){
          var Range = Max - Min;
          var Rand = Math.random();
          var num = Min + Math.round(Rand * Range); //四舍五入
          return num;
    }

    $.fn.drift=function(options){
        var options;
        var Defults = {
            maxSize:5,
            minSize:5,
            image:[],
            wind:0,
            sleep:80,
            sleepAnimate:5000
        };
        var timer = null;
        var randoms=function(max,min){
            return parseInt(Math.random()*(max-min)+min);
        }
        var $_this = $(this);

        var documentHeight = $_this.height();
        var documentWidth = $_this.width();

        $_this.css({
            // 'position':'relative',
        })
        

        if(options=='clear'){
            clearInterval(timer);
            return;
        }else{
            options =$.extend(Defults,options);

            timer = setInterval(function(){
                var flake = $('<img src="'+options.image[randoms(options.image.length,0)]+'" class="snowfall-flakes"/>').css({
                    'position':'absolute',
                    'top':0-(options.maxSize+50)+'px'
                });
                var startPositionLeft = Math.random() * documentWidth;
                var routeEnd = RandomNumBoth(-360,360);
                // console.log()
                var sizeFlake = options.minSize + Math.random() * options.maxSize;
                if(options.wind==0){
                    var endPositionLeft = Math.random() * documentWidth;
                }else{
                    var endPositionLeft =startPositionLeft - options.wind;
                }
                var durationFall = 6000;//速度
                var startOpacity = 0.7 + 0.3 * Math.random();
                var endOpacity = 0.2 * Math.random();

                flake.clone().appendTo($_this).css({
                    "left": startPositionLeft,
                    "z-index":1001,
                    "opacity": startOpacity,
                    "width": options.maxSize+'px',　//sizeFlake 一大一小把options.maxSize替换成sizeFlake
                    "color": "#fff",
                    "-webkit-transform": "rotate("+routeEnd+"deg)",
                    "-ms-transform":"rotate("+routeEnd+"deg)",
                    "-o-transform":"rotate("+routeEnd+"deg)",
                    "transform":"rotate("+routeEnd+"deg)"

                }).animate({
                    "top": documentHeight + 100,
                    "left": endPositionLeft,
                    "opacity": endOpacity,
                    "-webkit-transform": "rotate("+routeEnd+"deg)",
                    "-ms-transform":"rotate("+routeEnd+"deg)",
                    "-o-transform":"rotate("+routeEnd+"deg)",
                    "transform":"rotate("+routeEnd+"deg)"
                }, options.sleepAnimate, function () {
                    $(this).remove();
                });
            },options.sleep)

        }
    }

})(jQuery)