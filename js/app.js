/*

var isMobile = $(window).width() < 768;

if (isMobile) {
    $('nav').addClass("hide");
}
*/

$('.logo').click(function(){
   
    if ($('#page').hasClass("fadeIn")) {
        $('nav #main').click();
    } else {
        window.location = "index.html";
    }
   return false; 
});

// Initialize FastClick.js
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
} 

$('input[type=checkbox]').click(function(){
   
    if ($(this).is(":checked")) {
        $(document).on('touchstart', function(e) {
            e.preventDefault();
        });
    } else {
        $(document).off('touchstart');
    }
});

$('nav a').click(function(){
    
    var curr = $('.container-fluid.active').attr("id");
    var dest = $(this).attr("id");
    
    $('input[type=checkbox]').prop('checked', false);
    $(document).off('touchstart');
    
    console.log(curr, dest);
    
    // tranisition out
    if (curr == "main") {
        $('.container-fluid#' + curr).removeClass('scaleIn').removeClass("scaleInNoDelay").addClass("scaleOut");
    } else {
        $('.container-fluid#' + curr).removeClass('fadeIn').addClass("fadeOut");
        
        if (curr == "page") {
            $('body').removeClass("light"); 
            $('footer').removeClass("hide").addClass("fadeIn");
        }
    }
    
        
    // tranisitioning in
    setTimeout(function(){
        
        if (curr == "main") {
            $('.container-fluid#' + curr).removeClass('scaleOut').removeClass("active").addClass("hide");
        } else {
            $('.container-fluid#' + curr).removeClass('fadeOut').removeClass("active").addClass("hide");
        }
        
        if (dest == "main") {
            $('.container-fluid#' + dest).removeClass('hide').addClass("scaleInNoDelay").addClass("active");
        } else {
            $('.container-fluid#' + dest).removeClass('hide').addClass("fadeIn").addClass("active");
        }
        
    }, 250);
});

$('.image#me').click(function(){
   $('.me-full').addClass("scaleInNoDelayFast").removeClass("hide"); 
});

$('.me-full').click(function(){
    $(this).removeClass("scaleInNoDelayFast").addClass("scaleOutFast");
    setTimeout(function() {
        $('.me-full').removeClass("scaleOutFast").addClass("hide");
    }, 250);
});

$('.item').click(function(){
   $('.container-fluid#main').removeClass('scaleIn').removeClass('scaleInNoDelay').removeClass("scaleIn").addClass('scaleOut');
   $('.container-fluid#page').load('page.html').addClass("active");
   $('footer').addClass("fadeOut");
   $('body').addClass("light");
   
   setTimeout(function() {
   
        $('.container-fluid#main').removeClass('scaleOut').addClass("hide").removeClass("active");
        $('.container-fluid#page').removeClass("hide").addClass("fadeIn");
        $('footer').removeClass("fadeOut").addClass("hide");
    }, 250);
});


/*
$(window).resize(function(){
    
    isMobile = $(window).width() < 768;
    
    if (isMobile) {
        $('nav').addClass("hide");
    } else {
        $('nav').removeClass("hide");
    }
});
*/