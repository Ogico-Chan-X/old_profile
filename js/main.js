
// section3カルーセル  
new Vue({
  el: '#carousel_sec3',
  components:{
    carousel: VueCarousel.Carousel,
    slide: VueCarousel.Slide,
  },
});


// section4タブ機能
new Vue({
  el:'#tabs-menu_sec4',
  data:{
    activeTab: 'tabs-1',
  },
});





const slideWidth = 400;

let currentSlide = 0;

let numSlides;

const showSlide = (index) => {
  if  (index === 0)  {
    $('.carousel-control-prev').hide();
  } else {
    $('.carousel-control-prev').show();
  }
  
  if ( index === numSlides -1){
    $('.carousel-control-next').hide();
  }else{
    $('.carousel-control-next').show();
  }
  
  $('.slides')
  .stop()
  .animate(
    {
      left: `${-slideWidth * index}px`,
    },
    600,
  );
};

$('.carousel-control-prev').on('click', (e) => {
  e.preventDefault();
  
  currentSlide -= 1;
  showSlide(currentSlide);
});

$('.carousel-control-next').on('click', (e) => {
  e.preventDefault();

  currentSlide += 1;
  showSlide(currentSlide);
});

numSlides = $('.slides > li').length;

showSlide(currentSlide);


