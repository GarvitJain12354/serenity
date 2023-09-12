$( window ).on("load", function() {
    $('body').addClass('animation-border');
    $('.preloader').fadeOut();
});



$(document).ready(function() {
   
    $("button.toogle-btn").click(function(){
       $('body').toggleClass('animated');  
     });

    $(".about-image-btn").on('click', function(){
       $('.hide_cnts-about').slideToggle(); 
       $(this).hide(); 
    });
    
     $('.recent-product-j').owlCarousel({
      loop:true,
      margin:48,
      center:true,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1.5
          },
          1000:{
              items:1.8
          },
          1200:{
              items:1.8
          }
      }
  })

     
  
    
  });

//   $(window).load(function(){
//     $('body').addClass('animation');
//   });


  
$(document).ready(function(){

AOS.init({
      duration: 1200,
}); 

AOS.init({
    disable: window.innerWidth < 768,
  });
   

$('.testimonial-sliders-j').owlCarousel({
    loop:true,
    margin:28,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1.5
        },
        1000:{  
            items:2
        },
        1200:{
            items:2.4
        }
    }
})

$('.product-main-row-sliders-j').owlCarousel({
    loop:true,
    margin:28,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },
        1200:{
            items:1
        }
    }
})


const container = document.querySelector('.container123');
document.querySelector('.slider').addEventListener('input', (e) => {
  container.style.setProperty('--position', `${e.target.value}%`);
})

$(".accordion .group a").click(function(){
    if($(this).closest(".accordion").hasClass("active")) {
      $(this).closest(".accordion").removeClass("active");
      $(this).closest(".accordion").find(".body-part").slideUp();
    }else{
      $(".accordion").removeClass("active");
      $(".accordion").find(".body-part").slideUp();
      $(this).closest(".accordion").addClass("active");
      $(this).closest(".accordion").find(".body-part").slideDown();
    }
  })
  
});



// jQuery(function ($) {

// 	var $question = $('.question');
// 	var $answer = $('.answer');

// 	$question.click(function(){

// 		// Hide all answers
// 		$answer.slideUp();

// 		// Check if this answer is already open
// 		if($(this).hasClass('open')){
// 			// If already open, remove 'open' class and hide answer
// 			$(this).removeClass('open')
// 			       .next($answer).slideUp();
// 		// If it is not open...
// 		}else{
// 			// Remove 'open' class from all other questions
// 			$question.removeClass('open');
// 			// Open this answer and add 'open' class
// 			$(this).addClass('open')
// 			       .next($answer).slideDown();
				   
// 		}
// 	});

// });


const accordionItemHeaders = document.querySelectorAll(
    ".accordion-item-header"
  );
  
  accordionItemHeaders.forEach((accordionItemHeader) => {
    accordionItemHeader.addEventListener("click", (event) => {
      // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
  
      const currentlyActiveAccordionItemHeader = document.querySelector(
        ".accordion-item-header.active"
      );
      if (
        currentlyActiveAccordionItemHeader &&
        currentlyActiveAccordionItemHeader !== accordionItemHeader
      ) {
        currentlyActiveAccordionItemHeader.classList.toggle("active");
        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
      }
      accordionItemHeader.classList.toggle("active");
      const accordionItemBody = accordionItemHeader.nextElementSibling;
      if (accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      } else {
        accordionItemBody.style.maxHeight = 0;
      }
    });
  });



