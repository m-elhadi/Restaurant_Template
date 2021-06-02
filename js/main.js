
// navbar menu
// $(".navbar a").on("click", function () {
//   for (var i = 0; i < 10; i++) {
//     $(".navbar a").css("color", "#fff");
//   }
//   $(this).css("color", "#e75b1e");
//   $(".hvr-underline-from-center:before").css("background", "#e75b1e");
// });



// Navbar scroll
$(window).on("scroll", function () {
  var sc = $(this).scrollTop();
  console.log(sc);
  if (sc > 100) {
    $(".navbar").addClass("scrollnav");
    $(".navbar-brand img").addClass("scroll-img");
    $('.top-scroll').addClass("shows");
  } else {
    $(".navbar").removeClass("scrollnav");
    $(".navbar-brand img").removeClass("scroll-img");
    $('.top-scroll').removeClass("shows");
  }
});

//
$(".img-slide").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
//menu slide
$(".tab-slide").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

// start filter projects

$(document).ready(function () {
  $(".starters").show();

  $(".tab").click(function () {
    $(".starters,.dishes,.deserts,.drinks").hide();
    $(".tab").removeClass('tab-active');

    $($(this).data("item")).show();
    $(this).addClass('tab-active');
  });

  // lightBox plugin
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'maxWidth':600,
    'maxHeight':600
  })


     

});


// typed
$("#example").typer({
  strings: [" Friends", " Family", " Officemate"],
  typeSpeed: 150,
  backspaceSpeed: 200,
  backspaceDelay: 800,
  repeatDelay: 1000,
  repeat: true,
  autoStart: true,
  startDelay: 100,
  useCursor: false,
});


//
$('.top-scroll').on('click',function(){
  $(window).scrollTop(0);
})