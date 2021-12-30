
      
$('.ogico img:nth-child(n+2)').hide();
      setInterval(function() {
        $(".ogico img:first-child").fadeOut();
        $(".ogico img:nth-child(2)").fadeIn(2000);
        $(".ogico img:first-child").appendTo(".ogico");
      }, 4000);
