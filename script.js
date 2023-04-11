const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 3,
  loop: true,
  centeredSlides: false,
  grabCursor: true,
  effect: 'coverflow',
  coverflowEffect:{
    rotate:0,
    slideShadows: false,
    
  },

  // Navigation arrows
  navigation: {
    nextEl: '.button-prev',
    prevEl: '.button-next',
  },
});


let btns = document.querySelectorAll(".btn-info")
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e){
    const text = e.currentTarget.nextElementSibling;
    text.classList.toggle("dislpay-none")
  });
});

const menu = document.querySelector('.burger-menu');
const bg_btn = document.querySelector('.burger-btn');
bg_btn.addEventListener("click", function(){
    menu.classList.remove("dislpay-none1")
})
const close_btn = document.querySelector(".close");
close_btn.addEventListener("click",function(){
  menu.classList.add('dislpay-none1')
});

let profile_btn = document.querySelector('.profileicon');
let profile_menu = document.querySelector('.profile-menu');
profile_btn.addEventListener("click",function(){
  profile_menu.classList.toggle('dislpay-none2')
})
console.log(menu)