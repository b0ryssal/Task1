
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
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  

    breakpoints: {
   
    1180: {
        slidesPerView: 1,
        
        
       
        
        
        
    
        
        
     
    },
    1330: {
      slidesPerView: 4,
      grid: {
        rows: 2,
      },
      
    
      
      
    }
  }
   
    
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
