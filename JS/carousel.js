$(document).ready(function(){
    const nextIcon = '<img src="./style/images/carousel_left.png" alt:"left">';
    const prevIcon = '<img src="./style/images/carousel_right_2.png" alt:"right">';
    
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:25,
        nav:true,
        dots:false,
        smartSpeed:500,
        navText: [
            nextIcon,
            prevIcon
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
});