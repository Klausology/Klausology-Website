
 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
  
  $( ".lds-hourglass" ).fadeOut(2500, function()
  {
    $( ".lds-hourglass" ).remove(); 
  });    



  $('.navbar-default').addClass('top-of-page');
  $('.navbar-default .navbar-brand').addClass('top-of-page');
  $('.navbar-default .navbar-nav').addClass('top-of-page');
  $('#image').addClass('top-of-page');
  $('#comingSoonImage').addClass('top-of-page');
  $('#gameyMonth2').addClass('top-of-page');


  span = document.getElementById("middleName");

  setTimeout(function()
  { 
      span.style.opacity = 1;
  },100);


    new Vivus('Layer_2', {
      

      duration: 20,
         
      onReady: function (obj) {
      obj.el.style.opacity = 1;
    }

    },

      function (obj) {
      obj.el.classList.add('finished');
    });



  var element = document.getElementById('scene');

  var my_parallax = new Parallax(element, 
  {
        relativeInput: false,
        clipRelativeInput: false, 
        calibrateX: true,
        calibrateY: true,
        invertX: true,
        invertY: true,
        limitX: false,
        limitY: false,
        scalarX: 10,
        scalarY: 10,
        frictionX: 0.1,
        frictionY: 0.1,
        originX: 0.5,
        originY: 0.5
  });



});

function is_touch_device() {
  var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
  var mq = function(query) {
    return window.matchMedia(query).matches;
  }

  if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
    return true;
  }

  // include the 'heartz' as a way to have a non matching MQ to help terminate the join
  // https://git.io/vznFH
  var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
  return mq(query);
}

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

  $(document).ready(function() {
 


 (function() 
 {
  var delay = false;


    if(is_touch_device())
    {
     
      var toppie = document.getElementById("top");

      toppie.style.touchAction = 'none';


      event.preventDefault();
      $("#top").swipe( 
      {
        //Generic swipe handler for all directions
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) 
        { 
            
         
           


              if(delay) return;

              delay = true;
              setTimeout(function(){delay = false},200)

             

              var a= document.getElementsByTagName('section');
              if(direction === 'up') {
                for(var i = 0 ; i < a.length ; i++) {
                  var t = a[i].getClientRects()[0].top;
                  if(t >= 40) break;
                }
              }
              else if(direction === 'down'){
                for(var i = a.length-1 ; i >= 0 ; i--) {
                  var t = a[i].getClientRects()[0].top;
                  if(t < -20) break;
                }
              }

        if(i >= 0 && i < a.length) 
        {
          $('html,body').animate({
            scrollTop: a[i].offsetTop
          }, 500, 'easeInOutExpo'
          );
        }


        }
      });


    }
    else
    {
          $(document).on('mousewheel DOMMouseScroll', function(event) 
          {
            event.preventDefault();
            if(delay) return;

            delay = true;
            setTimeout(function(){delay = false},200)

            var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

            var a= document.getElementsByTagName('section');
            if(wd < 0) {
              for(var i = 0 ; i < a.length ; i++) {
                var t = a[i].getClientRects()[0].top;
                if(t >= 40) break;
              }
            }
            else {
              for(var i = a.length-1 ; i >= 0 ; i--) {
                var t = a[i].getClientRects()[0].top;
                if(t < -20) break;
              }
            }
            


            if(i >= 0 && i < a.length)
            {
              $('html,body').animate({
                scrollTop: a[i].offsetTop
              }, 1000, 'easeInOutExpo'
              );
            }
        });

    }
})();




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
        $('.go-top').click(function(event) {
          event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    });



  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });

