// Burger
var menuHandler = function () {
  $(document).ready(function () {
    $('.main-burger').click(function (event) {
      $('.main-burger,.main-menu-list').toggleClass('active');
      $('body').toggleClass('lock');
    });
  });
}

if ($(window).width() > 855) { menuHandler(); }
$(window).on('resize', function () {
  if ($(window).width() > 855) {
    menuHandler();
  }
});

$(document).ready(function () {
  $('.burger').click(function (event) {
    $('.burger,.main-menu-list').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

// Slick Slider
$(document).ready(function () {
    $('.main-slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear'
    })      
});

$(document).ready(function () {
  $(".video-slider").slick({
    dots: false,
    draggable: true,
    centerPadding: "60px",
    infinite: true,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
  });
});

// Slider Text Animation
// Анимация заголовка
if ($('.slick-slide').hasClass('slick-active')) {
  $('.slide-title').addClass('animate__animated animate__fadeInLeft');
} else {
  $('.slide-title').removeClass('animate__animated animate__fadeInLeft');
}

$('.main-slider').on("beforeChange", function () {

  $('.slide-title').removeClass('animate__animated animate__fadeInLeft');
  setTimeout(() => {
    $('.slide-title').addClass('animate__animated animate__fadeInLeft');
  }, 100);

})
// Анимация подзаголовка
if ($('.slick-slide').hasClass('slick-active')) {
  $('.slide-sub-title').addClass('animate__animated animate__fadeInTopRight');
} else {
  $('.slide-sub-title').removeClass('animate__animated animate__fadeInTopRight');
}

$('.main-slider').on("beforeChange", function () {

  $('.slide-sub-title').removeClass('animate__animated animate__fadeInTopRight');
  setTimeout(() => {
    $('.slide-sub-title').addClass('animate__animated animate__fadeInTopRight');
  }, 100);

})
// Анимация Текста
if ($('.slide-text').hasClass('slick-active')) {
  $('.slide-text').addClass('animate__animated animate__fadeInRight');
} else {
  $('.slide-text').removeClass('animate__animated animate__fadeInRight');
}

$('.main-slider').on("beforeChange", function () {

  $('.slide-text').removeClass('animate__animated animate__fadeInRight');
  setTimeout(() => {
    $('.slide-text').addClass('animate__animated animate__fadeInRight');
  }, 100);

})
// Анимация Кнопки
if ($('.slide-button').hasClass('slick-active')) {
  $('.slide-button').addClass('animate__animated animate__fadeInUpBig');
} else {
  $('.slide-button').removeClass('animate__animated animate__fadeInUpBig');
}

$('.main-slider').on("beforeChange", function () {

  $('.slide-button').removeClass('animate__animated animate__fadeInUpBig');
  setTimeout(() => {
    $('.slide-button').addClass('animate__animated animate__fadeInUpBig');
  }, 100);

})

// Countdown

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = '2020-12-31';
initializeClock('countdown', deadline);