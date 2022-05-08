$(document).ready(function(){
    $('.bxslider').bxSlider({
        pager: true, auto: true,
    });
    $('.bxslider_team').bxSlider({
        pager: true, controls: false,
    });
    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 200,
        itemMargin: 25,
        touch: true
    });
    $('.accordion').accordion({
        defaultOpen: '',
    });
    let filterList = {
        init: function(){
            $('.workportfolio').mixitup({
                targetSelector: '.portfolio',
                filterSelector: '.filter',
                effects: ['fade'],
                easing: 'snap'
            });
        },
    };
    filterList.init();
});