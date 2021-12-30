// const $box = $('.photoworks');


const showTab = (selector) => {
    
    // alert(selector);
  $('.photo_box_ul > li ').removeClass('active');
  
  $('.works_content > li').hide();
  
  $(`.photo_box_ul a[href="${selector}"]`)
    .parent('li')
    .addClass('active')
    
      
    $(selector).show();
  };
  
  $('.point').on('click', (e) => {
    e.preventDefault();
    
    const selector = $(e.target)
                      .parent('a')
                      .attr('href');
    showTab(selector);

  
  // $box.slideDown();
  
});

showTab('#works-1');

