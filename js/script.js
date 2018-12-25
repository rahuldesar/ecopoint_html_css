
      $('.product').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
        navText : ["",""],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1100:{
            items:4
        }
    }
})
 



$('.owl-testimonial').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    smartSpeed :900,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})