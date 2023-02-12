'use strict'

$('.owl-carousel').owlCarousel({
  stagePadding: 50,
  loop:true,
  margin:3,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      400:{
        items:1
      },
      600:{
          items:2
      },
      1000:{
          items:1
      }

  }
})

// const li = document.querySelectorAll('.links');
// const section = document.querySelectorAll(".scroll")
// function activeMenu() {
//   let len=section.length;
//   while(--len && window.scrollY + 97<section[len].offsetTop){}
//   li.forEach(ltx => ltx.classList.remove("active"));
//   li[len].classList.add("active")
// }
// activeMenu();
// window.addEventListener("scroll", activeMenu);


