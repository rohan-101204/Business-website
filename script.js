// 
var sidemenu = document.getElementById("navbar");

function openmenu() {
    sidemenu.style.right = "0";
}

const navLink=document.querySelectorAll('.nav-link')

const linkAction=()=>{
    const navMenu=document.getElementById('navbar')
    navMenu.style.right="-200px";
}
navLink.forEach(n=>n.addEventListener('click',linkAction))

var swiper =new Swiper(".home-slider",{
    loop:true,
    grabCursor:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
navigation:{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },

});
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#info-btn').onclick=()=>{
    contactInfo.style.display="block"
}

document.querySelector('#close-contact-info').onclick=()=>{
   contactInfo.style.display="none"
}