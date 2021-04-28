$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:8000,
    autoplayHoverPause:true,

    responsive:{
        0:{
            items:1,
            nav:true,
           
        },
       720:{
        items:2,
        nav:false,
       },
        1000:{
            items:2,
            nav:false,
            
        }
    }
})