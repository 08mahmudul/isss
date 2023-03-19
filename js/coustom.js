$(function(){

  $(".aboutdrop").click(function(){
    $(".aboutdrop span").toggleClass("ro")
    $(".dropp").slideToggle()
  })

  $(".aboutdropp").click(function(){
    $(".aboutdropp span").toggleClass("ro")
    $(".droppp").slideToggle()
  })

  $(".aboutdroop").click(function(){
    $(".aboutdroop span").toggleClass("ro")
    $(".droopp").slideToggle()
  })

  $(".aboutdrop2").click(function(){
    $(".aboutdrop2 span").toggleClass("ro")
    $(".drropp").slideToggle()
  })

  $(".aboutdrop3").click(function(){
    $(".aboutdrop3 span").toggleClass("ro")
    $(".ddropp").slideToggle()
  })

  $(".innerDrop").click(function(){
    $(".innerDrop span").toggleClass("ro")
    $(".drop2").slideToggle()
  })

  $(".innerDrop1").click(function(){
    $(".innerDrop1 span").toggleClass("ro")
    $(".drop3").slideToggle()
  })

  $(".innerDrop2").click(function(){
    $(".innerDrop2 span").toggleClass("ro")
    $(".drop4").slideToggle()
  })

  $(".innerDrop3").click(function(){
    $(".innerDrop3 span").toggleClass("ro")
    $(".drop5").slideToggle()
  })

  $(".innerDrop4").click(function(){
    $(".innerDrop4 span").toggleClass("ro")
    $(".drop6").slideToggle()
  })

  $(".innerDrop5").click(function(){
    $(".innerDrop5 span").toggleClass("ro")
    $(".drop7").slideToggle()
  })

  $('.product_slicks').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots:false,
    prevArrow:'<i class="fas fa-chevron-left has"></i>',
    nextArrow:'<i class="fas fa-chevron-right had"></i>',
    arrows:true,

    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  });

  $('.creative_slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:false,
    prevArrow:'<i class="fas fa-chevron-left has"></i>',
    nextArrow:'<i class="fas fa-chevron-right had"></i>',
    arrows:true,

    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  });
  $('.banner_six_slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:false,
    // prevArrow:'<i class="fas fa-chevron-left has"></i>',
    // nextArrow:'<i class="fas fa-chevron-right had"></i>',
    arrows:false,
  });

  // ======================
 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
});
// ============
  // ======================
 $('.slider_for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider_nav'
});
$('.slider_nav').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  asNavFor: '.slider_for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
});
  // ======================
 $('.slider_for_three').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider_nav_three'
});
$('.slider_nav_three').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  asNavFor: '.slider_for_three',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
});
  // ======================
 $('.slider_for_seven').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider_nav_seven'
});
$('.slider_nav_seven').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider_for_seven',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
});
  // ======================
 $('.slider_for_seven1').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider_nav_seven1'
});
$('.slider_nav_seven1').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider_for_seven1',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
});
  // ======================
 $('.slider_for_seven2').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider_nav_seven2'
});
$('.slider_nav_seven2').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider_for_seven2',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
});
  // ======================
 $('.slider_for_seven3').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider_nav_seven3'
});
$('.slider_nav_seven3').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider_for_seven3',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
});
// ============
  $('.kids_slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:true,
    // prevArrow:'<i class="fas fa-chevron-left has"></i>',
    // nextArrow:'<i class="fas fa-chevron-right had"></i>',
    arrows:false,

    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  });

  $('.about_slicker1').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:false,
    prevArrow:'<i class="fas fa-chevron-left has"></i>',
    nextArrow:'<i class="fas fa-chevron-right had"></i>',
    arrows:true,
  });

  $('.kids_slicker').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    dots:true,
    // prevArrow:'<i class="fas fa-chevron-left has"></i>',
    // nextArrow:'<i class="fas fa-chevron-right had"></i>',
    arrows:false,

    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  });

  $('.page7_slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    dots:false,
    prevArrow:'<i class="fas fa-chevron-left has"></i>',
    nextArrow:'<i class="fas fa-chevron-right had"></i>',
    arrows:true,
  });

  $('.pg7_dis_slick').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:false,
    prevArrow:'<i class="fas fa-chevron-left has"></i>',
    nextArrow:'<i class="fas fa-chevron-right had"></i>',
    arrows:true,

    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        }
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  });

  $('.pg_pro_slick').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:false,
    // prevArrow:'<i class="fas fa-chevron-left has"></i>',
    // nextArrow:'<i class="fas fa-chevron-right had"></i>',
    arrows:false,

    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        }
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  });

  $('.five_banner_slick').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    // prevArrow:'<i class="fas fa-chevron-left proo"></i>',
    // nextArrow:'<i class="fas fa-chevron-right prroo"></i>',
    arrows:false,
    autoplay: true,
    autoplaySpeed: 1500,
  });

  $('.cmmnnt_slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    dots:false,
    // prevArrow:'<i class="fas fa-chevron-left has"></i>',
    // nextArrow:'<i class="fas fa-chevron-right had"></i>',
    arrows:false,
  });

  $('.trand_slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots:false,
    prevArrow:'.est',
    nextArrow:'.wst',
    arrows:true,
  });

// =============slick_sider_here
$('.slider_part').slick({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    fade: true,
    prevArrow:'<i class="fas fa-chevron-left prev"></i>',
    nextArrow:'<i class="fas fa-chevron-right next"></i>',
    arrows:true,
  });
// =============slick_sider_here
$('.banner_slickker').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    fade: true,
    // prevArrow:'<i class="fas fa-chevron-left prev"></i>',
    // nextArrow:'<i class="fas fa-chevron-right next"></i>',
    arrows:false,
  });

// ===================
$('.watch_slick').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  dots:false,
  prevArrow:'<i class="fas fa-chevron-left has"></i>',
  nextArrow:'<i class="fas fa-chevron-right had"></i>',
  arrows:true,

  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },

    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },

    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      }
    },
  ]
});

  // ================================
  $('.watch_d_slick').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots:true,
    // prevArrow:'<i class="fas fa-chevron-left has"></i>',
    // nextArrow:'<i class="fas fa-chevron-right had"></i>',
    arrows:false,

    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
  
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
  
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
  
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  });
  // ================================

  $('.banner_slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots:true,
    // prevArrow:'<i class="fas fa-chevron-left has"></i>',
    // nextArrow:'<i class="fas fa-chevron-right had"></i>',
    arrows:false,
  });



  // ================================
  $('.banner_threes').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots:true,
    // prevArrow:'<i class="fas fa-chevron-left has"></i>',
    // nextArrow:'<i class="fas fa-chevron-right had"></i>',
    arrows:false,
  });
  // ================================
  $('.mini_slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:true,
    // prevArrow:'<i class="fas fa-chevron-left has"></i>',
    // nextArrow:'<i class="fas fa-chevron-right had"></i>',
    arrows:false,
  });
  // ================================

  // ================================
 
  // ================================
  $('.blog_slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots:false,
    prevArrow:'<i class="fas fa-chevron-left has"></i>',
    nextArrow:'<i class="fas fa-chevron-right had"></i>',
    arrows:true,

    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  });

       // ============
       new VenoBox({
        selector: '.my-video-links',
    });
  // ==============================
  $('.ha_slide').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    // prevArrow:'<i class="fas fa-chevron-left proo"></i>',
    // nextArrow:'<i class="fas fa-chevron-right prroo"></i>',
    arrows:false,
    autoplay: true,
    autoplaySpeed: 1000,
  });
      
  
  // ===================
  $('.ceta_slick').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots:false,
    prevArrow:'<i class="fas fa-chevron-left has"></i>',
    nextArrow:'<i class="fas fa-chevron-right had"></i>',
    arrows:true,

    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  });
  // ===================
  $('.slick_pro').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots:false,
    prevArrow:'<i class="fas fa-chevron-left has"></i>',
    nextArrow:'<i class="fas fa-chevron-right had"></i>',
    arrows:true,


    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  });


// =========================
$('.brand_logo').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 500,
  dots:false,
  // prevArrow:'<i class="fas fa-chevron-left prev"></i>',
  // nextArrow:'<i class="fas fa-chevron-right next"></i>',
  arrows:false,
});

$('.counter').counterUp({
  delay: 8,
  time: 5000
});

$('.leftSidebar, .rightSidebar').theiaStickySidebar({

  // container element
  'containerSelector': '',

  // top/bottom margiin in pixels
  'additionalMarginTop': 20,
  'additionalMarginBottom': 0,

  // auto up<a href="https://www.jqueryscript.net/time-clock/">date</a> height on window resize
  'updateSidebarHeight': true,

  // disable the plugin when the screen size is smaller than...
  'minWidth': 0,

  // disable the plugin on responsive layouts
  'disableOn<a href="https://www.jqueryscript.net/tags.php?/Responsive/">Responsive</a>Layouts': true,

  // or 'stick-to-top', 'stick-to-bottom'
  'sidebarBehavior': 'modern',

  // or 'absolute'
  'defaultPosition': 'relative',

  // namespace
  'namespace': 'TSS'
  
});

});


