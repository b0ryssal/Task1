
const swiper=new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },
  autoplay: {
    delay: 2500,
  },
 
    breakpoints: {
   
    960: {
        slidesPerView: 1,
       
        
       
       
        
     
    },
 
    1200: {
      slidesPerView: 3,
     
     
    },
 
    1400: {
      slidesPerView: 4,
      
    }
  }
   
    
});
const swiper2=new Swiper('.swiper2', {
  
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  

    breakpoints: {
    1181: {
      slidesPerView: 4,
      grid: {
        rows: 2,
      },
      
    
      
      
    },
  },
   
    
});
const swiper3=new Swiper('.swiper3', {
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },
  slidesPerView:1,
  breakpoints:{
  960: {
    slidesPerView: 3,
  },
},
});

const burger = document.querySelector('.header__burger');
if(burger){
    const menuBody=document.querySelector('.header__bar');
    burger.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        burger.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
