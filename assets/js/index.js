var $ = window.$

$(document).ready(function () {
  // adds scrolled class
  var windowWidth = $(window).width()

  var topClass = function () {
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
    $(window).resize(function () {
      if ($(window).width() != windowWidth) {
        windowWidth = $(window).width();
        $('section#hero').height(window.innerHeight)
      }
    })

    // hero animations
    $('section#hero h1, section#hero p, section#hero .buttons').css({ opacity: 0 })
    $('section#hero h1').addClass('animated').addClass('fadeInUp')
    setTimeout(function () { $('section#hero p').addClass('animated').addClass('fadeInUp') }, 500)
    setTimeout(function () { $('section#hero .buttons').addClass('animated').addClass('fadeInUp') }, 1000)

    // arrow click scroll
    $('section#hero .arrow').click(function () {
      $('html, body').animate({ scrollTop: $('#services').offset().top - 70 }, 1000)
    })
  }
  
  // setup parallax
  $('[data-parallax]').each(function () {
    var path = $(this).attr('data-parallax')
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
  var setHeights = function () {
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
  $(window).resize(function () {
    if ($(window).width() !== windowWidth) {
      windowWidth = $(window).width()
      setHeights()
    }
  })

  // menu toggle
  var animation = 'rubberBand'
  $('.menu-toggle').click(function () {
    $(this).addClass('animated').addClass(animation)
    $('body').toggleClass('menu-open')
    var events = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
    $(this).one(events, function () {
      $(this).removeClass('animated').removeClass(animation)
    })
  })

  // scoll to top
  $('#scroll-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1000)
  })

  // project filters
  $('section#projects .item').each(function () { $(this).addClass('show') })
  $('[data-filter]').click(function () {
    var filter = $(this).attr('data-filter')
    $('[data-service]').each(function () { $(this).removeClass('show') })
    if (filter === 'all') {
      $('[data-service]').each(function () { $(this).addClass('show') })
    } else {
      $('[data-service=' + filter + ']').each(function () { $(this).addClass('show') })
    }
  })
})
