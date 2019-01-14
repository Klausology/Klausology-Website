

 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
   //  $('.lds-hourglass').fadeOut(1000); // set duration in brackets  
 //  $('.preloader').fadeOut(1500); // set duration in brackets  

       $( ".lds-hourglass" ).fadeOut(2500, function() {
      // fadeOut complete. Remove the loading div
      $( ".lds-hourglass" ).remove(); //makes page more lightweight 
  });    


  //        $( ".preloader" ).fadeOut(6000, function() {
  //     // fadeOut complete. Remove the loading div
  //     $( ".preloader" ).remove(); //makes page more lightweight 
  // }); 


     $('.navbar-default').addClass('top-of-page');
     $('.navbar-default .navbar-brand').addClass('top-of-page');
          $('.navbar-default .navbar-nav').addClass('top-of-page');
          $('#image').addClass('top-of-page');
          $('#comingSoonImage').addClass('top-of-page');
          $('#gameyMonth2').addClass('top-of-page');
           $('.circleBoss').addClass('top-of-page');
     $('.letterPop').addClass('top-of-page');



var element = document.getElementById("addTitle");
var newElement = '<span id = "addedTitle">KLAUSOLOGY</span>';

element.insertAdjacentHTML( 'afterbegin', newElement);
           /* testimonials Slider Active
    =============================*/
    $('.screen-slider').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        navigation: true,
        autoPlay: true,
        autoPlayTimeout: 4000,
        smartSpeed: 1000,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        items: 1,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        center: true,
    });



//     $(function startAnimation() { 
//     var frames = document.getElementById("animation").children;
//     var frameCount = frames.length;
//     var i = 0;
//     setInterval(function () { 
//         frames[i % frameCount].style.display = "none";
//         frames[++i % frameCount].style.display = "block";
//     }, 1000);
// });





// new Vivus('Layer_1', 
// {
//   type: 'delayed', 
//   duration: 120, 
//   start: 'autostart', 
//   forceRender: false, dashGap: 20
// }, 
// function (obj) {
// obj.el.classList.add('finished');
// });


/* JavaScript */
new Vivus('Layer_1', { 
  type: 'delayed',
  duration: 220
}, function (obj) {
  obj.el.classList.add('finished');
});

new Vivus('Layer_2', {
  
  duration: 20

}, function (obj) {
  obj.el.classList.add('finished');
});


// var hi = new Vivus('Layer_1', 
// {
//   type: 'delayed', 
//   duration: 120, 
//   start: 'autostart', 
//   forceRender: false, dashGap: 20
// }, 
// function (obj) {
// obj.el.classList.add('finished');
// });



// new Vivus('preloader-logo', {
//     type: 'delayed',
//     duration: 120,
  
// }, function doDone(obj) 
// {
//     obj.el.classList.add('finished');

// }

// );
       
var letterPop = {};
letterPop.opacityIn = [0,1];
letterPop.scaleIn = [0.2, 1];
letterPop.scaleOut = 1.3;
letterPop.durationIn = 1000;
letterPop.durationOut = 800;
letterPop.delay = 800;

anime.timeline({loop: true})
  .add({
    targets: '.letterPop #downloadNow',
    opacity: letterPop.opacityIn,
    scale: letterPop.scaleIn,
    duration: letterPop.durationIn
  }).add({
    targets: '.letterPop #downloadNow',
    opacity: 0,
    scale: letterPop.scaleOut,
    duration: letterPop.durationOut,
    easing: "easeInExpo",
    delay: letterPop.delay
  }).add({
    targets: '.letterPop',
    opacity: 0,
    duration: 500,
    delay: 500
  });

// new Vivus('preloader-logo', {

//   type: 'delayed',
//   duration: 20,
//      // onReady: function () {
//      //             $('.preloader-logo').css('visibility', 'visible');
//      //       },

//                function(myVivus2)
//     {
//       myVivus2.play(myVivus2.getStatus() === 'end' ? -1: 1);
//     }

// // }, function (myVivus) {
// //   myVivus.play(myVivus.getStatus() === 'end' ? -1 : 1);
// })

// // new Vivus('main-logo', {duration: 200}, myCallback);

// // var hi = new Vivus('preloader-logo', 
// // {
// //   type: 'delayed', 
// //   duration: 80, 
// //   start: 'autostart', 
// //   forceRender: false, dashGap: 20
// // }, 
// // function (obj) {
// // obj.el.classList.add('finished');
// // });

  
// });
});

$('.description1').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: false})
  .add({
    targets: '.description1 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: function(el, i) {
      return 3900 + 40 * i;
    }
  // }).add({
  //   targets: '.title .letter',
  //   translateX: [0,-30],
  //   opacity: [1,0],
  //   easing: "easeInExpo",
  //   duration: 1100,
  //   delay: function(el, i) {
  //     return 100 + 30 * i;
  //   }
  });


$('.title').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));

});

anime.timeline({loop: false})
  .add({
    targets: '.title .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: function(el, i) {
      return 3800 + 30 * i;
    }
  // }).add({
  //   targets: '.title .letter',
  //   translateX: [0,-30],
  //   opacity: [1,0],
  //   easing: "easeInExpo",
  //   duration: 1100,
  //   delay: function(el, i) {
  //     return 100 + 30 * i;
  //   }
  });


$(document).ready(function() {

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


  /* Smoothscroll js
  -----------------------------------------------*/
    $(function() {
        $('.navbar-default a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });



  

$(window).on("scroll", function() {
    var scrollPos = $(window).scrollTop();
    if (scrollPos <= 0) 
    {
        $('.navbar-default').addClass('top-of-page');
         $('.navbar-default .navbar-brand').addClass('top-of-page');
                  $('.navbar-default .navbar-nav').addClass('top-of-page');
                            $('#image').addClass('top-of-page');
                                 $('#comingSoonImage').addClass('top-of-page');
          $('#gameyMonth2').addClass('top-of-page');
             $('.circleBoss').addClass('top-of-page');
                $('.letterPop').addClass('top-of-page');



var element = document.getElementById("addTitle");
var newElement = '<span id = "addedTitle">KLAUSOLOGY</span>';

element.insertAdjacentHTML( 'afterbegin', newElement);
           /* testimonials Slider Active
    =============================*/
    $('.screen-slider').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        navigation: true,
        autoPlay: true,
        autoPlayTimeout: 4000,
        smartSpeed: 1000,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        items: 1,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        center: true,
    });






    } else 
    {
        $('.navbar-default').removeClass('top-of-page');
         $('.navbar-default .navbar-brand').removeClass('top-of-page');
                  $('.navbar-default .navbar-nav').removeClass('top-of-page');
                         $('#image').removeClass('top-of-page');
                              $('#comingSoonImage').removeClass('top-of-page');
          $('#gameyMonth2').removeClass('top-of-page');
    $('.circleBoss').removeClass('top-of-page');
                $('.letterPop').removeClass('top-of-page');

var elem = document.getElementById("addedTitle");
elem.remove();




    }
});

  /* Team carousel
  -----------------------------------------------*/
  $(document).ready(function() {
      $("#team-carousel").owlCarousel({
          items : 3,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3],
          slideSpeed: 300,
          itemsDesktop : [1199,2],
          itemsTablet: [768,1],
          itemsTabletSmall: [985,2],
          itemsMobile : [479,1],
      });
    });
    

    /* Back to Top
    -----------------------------------------------*/
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
          $('.go-top').fadeIn(200);
            } else {
                $('.go-top').fadeOut(200);
           }
        });   
          // Animate the scroll to top
        $('.go-top').click(function(event) 
        {
          event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
  
    });


  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });

var mouseXY = {};
    $( document ).on( "mousemove", function( event ) {
      mouseXY.X = event.pageX; 
      mouseXY.Y = event.pageY;
    });
    var vinnyHead = $("#image1");
    var vinnyBody = $("#image2");
    var prevXY = {X: null, Y: null};
    var cowInterval = setInterval(function()
    {
    
      
 if(prevXY.Y != mouseXY.Y || prevXY.X != mouseXY.X && (prevXY.Y != null || prevXY.X != null)) {
      
      var cowXY = vinnyHead.position();
      var diffX = cowXY.left - mouseXY.X;
      var diffY = cowXY.top - mouseXY.Y;
      var tan = diffY / diffX;


    
      var atan = Math.atan(tan)* 180 / Math.PI;;
       if(diffY > 0 && diffX > 0) {
      
        atan += 180; 
      }
      else if(diffY < 0 && diffX > 0) {
      
        atan -= 180;
      }

      prevXY.X = mouseXY.X;
      prevXY.Y = mouseXY.Y;



if(atan >= -90 && atan <= 90)
 {   




    

    vinnyBody.css(
    {
              transform: "scaleX(1)"

      
       
      }
    );


    vinnyHead.css(
    {
             transform: "scaleX(1)",
             "transform-origin": "center center"


       
      }
    );



  }
  else
  {
       
    vinnyBody.css(
    {
               transform: "scaleX(-1)"

      }
    );

       vinnyHead.css(
    {
            transform: "scaleX(-1)",
            "transform-origin" : "center center"


       
      }
    );

  }
  


  }

   } , 10);