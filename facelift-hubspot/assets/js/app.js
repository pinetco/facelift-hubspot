/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/* Smooth Scroll Logic */
$("[data-scroll='true']").click(function () {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});
/* One Col Slick Slider Logic */

$('.one-col-slider').slick({
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000
});
/* Three Col Slider */

$('.three-col-slider').slick({
  dots: true,
  arrows: true,
  autoplaySpeed: 5000,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: false,
  swipeToSlide: true,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 640,
    settings: {
      arrows: false,
      slidesToShow: 1
    }
  }]
});
/* Four Col Slider */

$('.four-col-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  swipeToSlide: true,
  autoplay: true,
  infinite: false,
  autoplaySpeed: 5000,
  pauseOnHover: false,
  pauseOnFocus: false,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});
$('.icon-text-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  swipeToSlide: true,
  autoplay: true,
  infinite: false,
  autoplaySpeed: 5000,
  pauseOnHover: false,
  pauseOnFocus: false,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});
/*  FAQ Logic */

$(".accordion-question").click(function () {
  var isActive = $(this).parent().hasClass("is-active");

  if (isActive) {
    return;
  } else {
    $(this).parent().siblings().removeClass("is-active");
    $(this).parent().addClass("is-active");
    $(this).parent().siblings().find(".accordion-answer").slideUp();
    $(this).next().slideDown();
  }
});
/* Tab */

$('.tab-link').click(function () {
  var tabID = $(this).attr('data-tab');
  $(this).addClass('active').siblings().removeClass('active');
  $('#tab-' + tabID).addClass('active').siblings().removeClass('active');
});
/* Tab for success stories */

$('.company-logo-tab').click(function () {
  var tabID = $(this).attr('story-tab');
  $(this).addClass('active').siblings().removeClass('active');
  $('#story-' + tabID).addClass('active').siblings().removeClass('active');
});
/* Video tab */

$('.video-tab').click(function () {
  var tabID = $(this).attr('video-tab');
  $(this).addClass('active').siblings().removeClass('active');
  $('#video-' + tabID).addClass('active').siblings().removeClass('active');
});
/* Pricing Card */

function mobileOnlySlider() {
  $('.pricing-card').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  });
}

if (window.innerWidth < 768) {
  mobileOnlySlider();
}

$(window).resize(function (e) {
  if (window.innerWidth < 1024) {
    if (!$('.pricing-card').hasClass('slick-initialized')) {
      mobileOnlySlider();
    }
  } else {
    if ($('.pricing-card').hasClass('slick-initialized')) {
      $('.pricing-card').slick('unslick');
    }
  }
});
$("[data-toggle='video']").click(function () {
  var clone = $(this).find(".video-popup").clone();
  $("#video-popup").find(".wistia-video-popup").html("");
  $("#video-popup").find(".wistia-video-popup").html(clone);
  $("#video-popup").fadeIn();
});
$("[data-close]").click(function () {
  $(this).parents(".modal").fadeOut();
});
$(function () {
  // DOM ready
  // If a link has a dropdown, add sub menu toggle.
  $('nav ul li a:not(:only-child)').click(function (e) {
    $(this).siblings('.nav-dropdown').toggle(); // Close one dropdown when selecting another

    $('.nav-dropdown').not($(this).siblings()).hide();
    e.stopPropagation();
  }); // Clicking away from dropdown will remove the dropdown class

  $('html').click(function () {
    $('.nav-dropdown').hide();
  }); // Toggle open and close nav styles on click

  $('#nav-toggle').click(function () {
    $('nav ul').slideToggle();
  }); // Hamburger to X toggle

  $('#nav-toggle').on('click', function () {
    this.classList.toggle('active');
  });
}); // end DOM ready

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 1) {
    $(".header").addClass("white-header");
  } else {
    $(".header").removeClass("white-header");
  }
});
$(".menu-toggle").click(function () {
  $(".facelift-navigation-menu").slideToggle();
});
$(".hs-item-has-children").append("<span class='block submenu-toggle'><span class='block w-full h-full submenu-arrow'></span></span>");
$(".submenu-toggle").click(function () {
  $(this).toggleClass("is-open");
  $(this).siblings("ul").slideToggle();
});
/******/ })()
;