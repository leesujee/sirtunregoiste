// hamburger
$(function() {
  $('.drawer-item>a').click(function() {
    $('#drawer-check').removeAttr('checked').prop('checked', false).change();
  });
});

// show floating
$('.floating').hide();
$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('.floating').fadeIn(1000);
    } else {
        $('.floating').fadeOut(300);
    }
});

//  swiper-slide
var mySwiper = new Swiper ('.swiper-container', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 15,
  centeredSlides: true, 
  pagination: '.swiper-pagination',
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  slidesPerView: 1.5,
});

// smooth scroll
$(function() {
    $('a[href^="#"]').click(function() {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('html, body').animate({ scrollTop: position }, 500, 'swing');
        return false;
    });
});

$(function() {
    ScrollReveal().reveal('.lead', {
        distance: '90px',
        origin: 'bottom',
        duration: '2000',
        delay: '1000'
    });
    ScrollReveal().reveal('.about', {
        distance: '50px',
        origin: 'bottom',
        duration: '1000'
    });
    ScrollReveal().reveal('.trouble01', {
        distance: '50px',
        origin: 'bottom',
        duration: '1000',
    });
    ScrollReveal().reveal('.nmn', {
        distance: '50px',
        origin: 'bottom',
        duration: '1000'
    });
    ScrollReveal().reveal('#point-item-01', {
        distance: '50px',
        origin: 'right',
        viewFactor: '0.8',
        duration: '500',
        easing: 'linear'
    });
    ScrollReveal().reveal('#point-item-02', {
        distance: '50px',
        origin: 'right',
        viewFactor: '0.8',
        duration: '500',
        easing: 'linear'
    });
    ScrollReveal().reveal('#point-item-03', {
        distance: '50px',
        origin: 'right',
        viewFactor: '0.8',
        duration: '500',
        easing: 'linear'
    });
    ScrollReveal().reveal('#point-item-04', {
        distance: '50px',
        origin: 'right',
        viewFactor: '0.8',
        duration: '500',
        easing: 'linear'
    });
    ScrollReveal().reveal('.conclusion', {
        distance: '50px',
        origin: 'bottom',
        viewFactor: '0.4',
        duration: '500',
        easing: 'linear'
    });
});

// motion animation
var EffectH = 100;
$(window).on('scroll load', function() {
    var scTop = $(this).scrollTop();
    var scBottom = scTop + $(this).height();
    var effectPos = scBottom - EffectH;
    $('.js-scroll').each(function() {
        var thisPos = $(this).offset().top;
        if (thisPos < effectPos) {
            $.when(
                $(this).addClass("show")
            ).done(function() {
                $(this).delay(500).queue(function() {
                    $(this).addClass("done")
                })
            });
        }
    });
});