
$('.toSec1').on('click', (e) => {
  e.preventDefault();
  
  const secTop = $('.section1').offset().top;
  $('html, body').animate({ scrollTop: secTop }, 800);
});



$('.toSec2').on('click', (e) => {
  e.preventDefault();
  
  const secTop = $('#section2').offset().top;
  $('html, body').animate({ scrollTop: secTop }, 800);
});


$('.toSec3').on('click', (e) => {
  e.preventDefault();
  
  const secTop = $('.section3').offset().top;
  $('html, body').animate({ scrollTop: secTop }, 800);
});

$('.toSec4').on('click', (e) => {
  e.preventDefault();
  
  const secTop = $('.section4').offset().top;
  $('html, body').animate({ scrollTop: secTop }, 800);
});

$('.toSec5').on('click', (e) => {
  e.preventDefault();
  
  const secTop = $('.section5').offset().top;
  $('html, body').animate({ scrollTop: secTop }, 800);
});

