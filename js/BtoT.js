

const updateButton= () => {

  if ($(window).scrollTop() >= 200) {
    
    $('.back-to-top').fadeIn();
  } else {
    $('.bacl-to-top').fadeOut();
  }
};

$(window).on('scroll', updateButton);

$('.back-to-top').on('click', (e) => {
  e.preventDefault();
  
  $('html, body').animate({ scrollTop: 0 }, 800);
});

updateButton();