

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
  $('.circleBoss').addClass('top-of-page');
  $('.letterPop').addClass('top-of-page');
  $('.circleBoi').addClass('top-of-page');
  $('.spinny').addClass('top-of-page');

  span = document.getElementById("middleName");

  setTimeout(function()
  { 
      span.style.opacity = 1;
  },50);



  span2 = document.getElementById("magic");

  setTimeout(function()
  { 
      span2.style.opacity = 0;
      span2.style.transform.translateY = "0%";
  },50);
  
  
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

    
  $(window).on("debouncedresize", function( event )
  {
      updateParallax(); 
  });

    updateParallax(); 

    function updateParallax() 
    {
      
      var viewport_width = $(window).width();
      var layers = my_parallax.layers;
          
      for (var j = 0; j<layers.length; j++) 
      {
           var layer = layers.item(j);
           var deskDepth = layer.getAttribute("data-depth-desk");
           var mobileDepth = layer.getAttribute("data-depth-mobile");
           
           if(viewport_width <= 650)
           {
               var sceney = document.getElementById("scene");
              var homey = document.getElementById("home");
              var bannersusu = document.getElementById("bannersu");

              if(my_parallax != null)
              {
                 my_parallax.disable();
              }
             
             
              bannersusu.style.display = "block";
              
              homey.style.backgroundImage = "url('images/static-image1.png')";
        
              homey.style.backgroundSize = "100%";
              homey.style.backgroundRepeat = "no-repeat";
              sceney.style.display = "none";
           }
           else
           {
              var sceney = document.getElementById("scene");
          
              var bannersusu = document.getElementById("bannersu");
                      
             
              bannersusu.style.display = "none";
              

              sceney.style.display = "block";
              my_parallax.enable();

           }


           if(viewport_width < 768) {
               if(layer.hasAttribute("data-depth-mobile")) {
                   layer.setAttribute("data-depth", mobileDepth);
               }
           }
           else {
               if(layer.hasAttribute("data-depth-desk")) {
                   layer.setAttribute("data-depth", deskDepth);
               }
           }


       }
       my_parallax.updateLayers();
    }
       


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



  


(function() {
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
        
     
          console.log(direction);


          if(delay) return;

          delay = true;
          setTimeout(function(){delay = false},200)

         

          var a= document.getElementsByTagName('section');
          if(direction === 'left' || direction === 'up') {
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
          





          if(i >= 0 && i < a.length) {
            $('html,body').animate({
              scrollTop: a[i].offsetTop
            }, 1000, 'easeInOutExpo'
            );
          }


    }
  });


}
else
{

 

  $(document).on('mousewheel DOMMouseScroll', function(event) {
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
    





    if(i >= 0 && i < a.length) {
      $('html,body').animate({
        scrollTop: a[i].offsetTop
      }, 1000, 'easeInOutExpo'
      );
    }

      
  });
}
})();



//--- END SHOW/HIDE SIDE PANEL EVENTS ---//

$(window).on("scroll", function() 
{

    var scrollPos = $(window).scrollTop();
    if (scrollPos <= 0) 
    {
     
        span2 = document.getElementById("magic");

        setTimeout(function()
        { 
              span2.style.transform.translateY = "0%";
           
           
              span2.style.opacity = 0;
        
        },50);
      
            

            $('.navbar-default').addClass('top-of-page');
            $('.navbar-default .navbar-brand').addClass('top-of-page');
            $('.navbar-default .navbar-nav').addClass('top-of-page');
            $('#image').addClass('top-of-page');
            $('#comingSoonImage').addClass('top-of-page');
            $('#gameyMonth2').addClass('top-of-page');
            $('.circleBoi').addClass('top-of-page');
            $('.spinny').addClass('top-of-page');
            span = document.getElementById("middleName");

            setTimeout(function()
            { 
            
                span.style.opacity = 1;
            },50);
      
    }
    else 
    {

        $('.navbar-default').removeClass('top-of-page');
        $('.navbar-default .navbar-brand').removeClass('top-of-page');
        $('.navbar-default .navbar-nav').removeClass('top-of-page');
        $('#image').removeClass('top-of-page');
        $('#comingSoonImage').removeClass('top-of-page');
        $('#gameyMonth2').removeClass('top-of-page');
        $('.circleBoss').removeClass('top-of-page');
        $('.letterPop').removeClass('top-of-page');
        $('.circleBoi').removeClass('top-of-page');
        $('.spinny').removeClass('top-of-page');

        span = document.getElementById("middleName");

        setTimeout(function()
        {
            span.style.opacity = 0;
        },50);
          

        span2 = document.getElementById("magic");

        setTimeout(function()
        { 
            span2.style.transform.translateY = "100%";
             
            span2.style.opacity = 1;
        },50);

    }

    

});

    /* Back to Top
    -----------------------------------------------*/

$(window).scroll(function() 
{
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
$( document ).on( "mousemove", function( event ) 
{
      mouseXY.X = event.pageX; 
      mouseXY.Y = event.pageY;
    });
    var vinnyHead = $("#image1");
    var vinnyBody = $("#image2");
    var prevXY = {X: null, Y: null};
    var cowInterval = setInterval(function()
    {
        
          
     if(prevXY.Y != mouseXY.Y || prevXY.X != mouseXY.X && (prevXY.Y != null || prevXY.X != null)) 
     {
          
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