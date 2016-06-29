const {$} = window

$(document).ready(() => {
  // adds scrolled class
  const topClass = () => {
    if ($(document).scrollTop() > 10) {
      $('body').addClass('scrolled')
    } else {
      $('body').removeClass('scrolled')
    }
  }
  topClass()
  $(window).scroll(topClass)

  if ($('section#hero').length) {
    // sets height of hero image
    $('section#hero').height(window.innerHeight)
    $(window).resize(() => {
      $('section#hero').height(window.innerHeight)
    })

    // hero animations
    $('section#hero h1, section#hero p, section#hero .buttons').css({ opacity: 0 })
    $('section#hero h1').addClass('animated').addClass('fadeInUp')
    setTimeout(() => $('section#hero p').addClass('animated').addClass('fadeInUp'), 500)
    setTimeout(() => $('section#hero .buttons').addClass('animated').addClass('fadeInUp'), 1000)

    // arrow click scroll
    $('section#hero .arrow').click(function () {
      $('html, body').animate({ scrollTop: $('#services').offset().top - 70 }, 1000)
    })
  }
  
  // setup parallax
  $('[data-parallax]').each(function () {
    const path = $(this).attr('data-parallax')
    $(this).parallax({ imageSrc: path })
  })

  // add and remove project animation classes
  $('section#projects svg').addClass('animated').addClass('rotateOut')
  $('section#projects a').hover(function () {
    $(this).find('svg').removeClass('rotateOut').addClass('rotateIn')
  }, function () {
    $(this).find('svg').removeClass('rotateIn').addClass('rotateOut')
  })

  // equal heights for service teasers
  const setHeights = () => {
    var heights = { h3: 0, p: 0, img: 0 }
    $('section#services h3').height('inherit')
    $('section#services p').height('inherit')
    $('section#services img').height('inherit')
    $('section#services .service').each(function () {
      var h3 = $(this).find('h3').height()
      var p = $(this).find('p').height()
      var img = $(this).find('img').height()
      if (heights.p < p) heights.p = p
      if (heights.h3 < h3) heights.h3 = h3
      if (heights.img < img) heights.img = img
    })
    $('section#services h3').height(heights.h3)
    $('section#services p').height(heights.p)
    $('section#services img').height(heights.img)
  }
  setHeights()
  $(window).resize(() => setHeights())

  // menu toggle
  const animation = 'rubberBand'
  $('.menu-toggle').click(function () {
    $(this).addClass('animated').addClass(animation)
    $('body').toggleClass('menu-open')
    const events = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
    $(this).one(events, () => {
      $(this).removeClass('animated').removeClass(animation)
    });
  })
  

})
