$(document).ready(function() {
    $('.hire-btn').click(function(){
      $('.hire-btn').toggle();
      setTimeout(function(){
      $('body,html').scrollTop($('.hire-btn').offset().top);
        console.log($('.hire-btn').outerHeight()+$('.hire-btn').offset().top);
      });
    });
  });