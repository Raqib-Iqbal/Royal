function mySlick(){
    $(".wrapper").not('.slick-initialized').slick({
        centerMode:false,
        autoplay:true,
        dots:false,
        arrows:false,
        slidesToShow:3,
        responsive:[{
            breakpoint:786,
            settings:{
                dots:false,
                arrows:false,
                slidesToShow:1,
                slideToScroll:1
            }
        }]
    });
}

mySlick();

function beverAge(){
    $(".beverage-slider").not('.slick-initialized').slick({
        centerMode:false,
        autoplay:true,
        dots:false,
        arrows:false,
        slidesToShow:3,
        responsive:[{
            breakpoint:786,
            settings:{
                dots:false,
                arrows:false,
                slidesToShow:1,
                slideToScroll:1
            }
        }]
    });
}

beverAge();

$(document).ready(function(){
    $('#review .owl-carousel').owlCarousel({
      loop:true,
      autoplay:true,
      dots:true,
      responsive:{
          0: {
              items:1
          },
          544:{
              items:1
          }
        }
  })
});

$(document).ready(function(){
    const menuBtn = document.querySelector(".menu-icon span");
    const searchBtn = document.querySelector(".search-icon");
    const cancelBtn = document.querySelector(".cancel-icon");
    const items = document.querySelector(".nav-items");
    const form = document.querySelector("form");
    menuBtn.onclick = ()=>{
      items.classList.add("active");
      menuBtn.classList.add("hide");
      searchBtn.classList.add("hide");
      cancelBtn.classList.add("show");
    }
    cancelBtn.onclick = ()=>{
      items.classList.remove("active");
      menuBtn.classList.remove("hide");
      searchBtn.classList.remove("hide");
      cancelBtn.classList.remove("show");
      form.classList.remove("active");
      cancelBtn.style.color = "#ff3d00";
    }
    searchBtn.onclick = ()=>{
      form.classList.add("active");
      searchBtn.classList.add("hide");
      cancelBtn.classList.add("show");
    }
});