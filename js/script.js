$(function (){
  $(document).ready(function () {
    const $submitBtn = $('#js-submit')
    $('#form input,#form textarea').on('change', function () {
      if (
        $('#form input[type="text"]').val() !== "" &&
        $('#form input[type="email"]').val() !== "" &&
        $('#form input[type="checkbox"]').val() !== "" &&
        $('#form #privacyCheck').prop('checked') === true
      ) {
        $submitBtn.prop('disabled', false);
  
      } else {
        $submitBtn.prop('disabled', true);
      }
    });
    
  });
  $(document).ready(function () {

    $('#form').submit(function (event) {
      var formData = $('#form').serialize();
      $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfbZ57RlXAjD3zaKFwtMgZtVQpIb8T4UK5_QhyoLQmEZ6c3gw/formResponse",
        data: formData,
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: function () {
            // $(".end-message").slideDown();
            // $(".submit-btn").fadeOut();
            window.location.href = "thanks.html";
          },
          200: function () {
            $(".false-message").slideDown();
          }
        }
      });
      event.preventDefault();
    });

  });

  // アコーディオン
  // answer01以外の非表示
  $('.faq-list-item div[id != "answer01"]').hide();
  // クリックイベント
  $('.faq-list-item').click(function(){
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')){
      $answer.removeClass('open');
      $answer.slideUp();
    }else {
      $answer.addClass('open');
      $answer.slideDown();
    }
  });
// swioer
  var swiper = new Swiper('.swiper-container', {
    centeredSlides: true,
    initialSlide: 2,
    simulateTouch:true,
    autoHeight: true,
    breakpoints: {
      400: {
        slidesPerView: 1.5,
        spaceBetween: 56,
      },
      // 1200px以上の場合
      768: {
        slidesPerView: 2.5,
        spaceBetween: 56,
      },
      1200: {
        slidesPerView: 3.5,
        spaceBetween: 56,
      },
    },
    loop: true,
    autoplay: {
      speed: 1000,
      delay: 5000,
      disableOnInteraction: false,
    },
  })
  // aos
  AOS.init({
    duration: 300,
    easing: 'ease-in',
    delay: 250,
    placement:top-top,
    once: false
  });
  // スムーススクロール
  $('.form-btn').click(function(){
    var scroll = $('#contact').offset().top;
    scroll -= 95;

    $('html,body').animate({scrollTop: scroll}, 1000);
  });
// ハンバーガーメニュー
$('.burger-btn').on('click',function(){
  $('.header-nav').fadeToggle(300);
  $(this).toggleClass('cross');
  $(this).toggleClass('white');
});
// クリック後のlist非表示の解消
window.matchMedia('(max-width: 768px)').addEventListener('change', e => {
  if(!e.matches) $('.header-nav').attr('style' , null);
});
});