

$(window).on('loading', function () {
  
    endLoading();
});

$(function(){
    setTimeout('endLoading()', 3000);
} );

function endLoading(){
    $('.loading').fadeOut(1000, function() {
        $('.loading').fadeOut(800);
    });
}