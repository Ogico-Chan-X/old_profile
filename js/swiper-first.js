let mySwiper = new Swiper('.swiper-container', {
    
  autoplay: {
    delay: 3000,
  },
  
  loop:true,
  slidesPreView:3,
  conteredSlides : true,
  effect: 'coverflow',
  
  pagination: {
    el: '.swiper-pagination', //ページネーションの要素
    type: 'bullets', //ページネーションの種類
    clickable: true, //クリックに反応させる
  },
  
  navigation: { 
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {  //スクロールバーを表示
    el: '.swiper-scrollbar',
    draggable: true,
  },
})

const prev_button =  document.querySelector('.swiper-button-prev');
const next_button =  document.querySelector('.swiper-button-next');

container.addEventListener('mouseenter', () => {

  prev_button.classList.add('hover');
  next_button.classList.add('hover');
});

container.addEventListener('mouseleave', () => {
  // hover クラスを削除
  prev_button.classList.remove('hover');
  next_button.classList.remove('hover');
});

