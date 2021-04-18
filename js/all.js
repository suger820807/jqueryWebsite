$(document).ready(function () {

  $('.option').click(function (e) {
    e.preventDefault();
    // $(this).find('ul').toggleClass('active');
    $(this).toggleClass('active');
    $(this).parent().find('ul').slideToggle(300);
    $(this).parent().siblings().find('> a').removeClass('active');
    $(this).parent().siblings().find('ul').slideUp(300);
  });

  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination'
    },
    autoplay: {
      delay: 5000,
    },
    loop:true,
  });

  $('.goTop').click(function (e) {
    console.log("555");
    $('html,body').animate(
      { scrollTop: 0 }, 500
    );
  })

});