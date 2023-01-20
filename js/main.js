window.addEventListener("scroll", function () {
    let nav = document.querySelector(".navbar")
    nav.classList.toggle("for_transeion" , window.scrollY > 100);
    nav.classList.toggle("for_fixed" , window.scrollY > 150);
})
// ////////////////////////////////////////////
$("#slider_1").owlCarousel({
    loop:true,
    margin: 10,
    autoplay: true,
    smartSpeed: 300,
    dots: false,
    nav:true,
    navText:[`<i class="fa-solid fa-chevron-left"></i>`,`<i class="fa-solid fa-chevron-right"></i>`],
    paginationSpeed:800,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
         1100:{
            items:3
        },
        1200:{
            items:3
        }
    }
})
// /////////////////////////////////////
$("#slider_2").owlCarousel({
    loop:true,
    margin: 10,
    autoplay: true,
    smartSpeed: 300,
    dots: false,
    nav:true,
    navText:[`<i class="fa-solid fa-chevron-left"></i>`,`<i class="fa-solid fa-chevron-right"></i>`],
    animateIn:'fadeIn',
    animateOut: 'fadeOut',
    paginationSpeed:800,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
         1100:{
            items:3
        },
        1200:{
            items:3
        }
    }
})
// /////////////////////////////////////
let heart = document.getElementById("heart");
heart.addEventListener("click", function () {
    heart.classList.toggle("onclick-heart");
})
/////////////////////
//////////////////////////
window.addEventListener("load", function () {
    let loading = document.getElementById("loading");
    document.body.style.overflow = "hidden";
    
    setTimeout(function () {
        loading.style.display = "none";
        document.body.style.overflow = "auto";
    },1500);

})
// /////////////////////
window.addEventListener("scroll", function () {
    let scrollUp = document.querySelector(".scroll_up");
    scrollUp.classList.toggle("scroll_transaion", window.scrollY > 150);
    scrollUp.classList.toggle("show_scroll", window.scrollY > 200);
})
    let scrollUp = document.querySelector(".scroll_up");
scrollUp.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
        
        
    })