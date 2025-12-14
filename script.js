$(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
   var scrolled = $(window).scrollTop(); 
   $('.layer-1').css('top',(0-(scrolled*.25))+'px');
   $('.layer-2').css('top',(0-(scrolled*.5))+'px');
   $('.layer-3').css('top',(0-(scrolled*.75))+'px');
   $('.planet-1').css('top',(400-(scrolled*.8))+'px');
   $('.planet-2').css('top',(200-(scrolled*.6))+'px');
   $('.planet-3').css('top',(500-(scrolled*.4))+'px'); 
   $('.planet-4').css('top',(600-(scrolled*.5))+'px'); 
   $('.planet-5').css('top',(600-(scrolled*.7))+'px'); 
   $('.planet-6').css('top',(400-(scrolled*.7))+'px'); 
   $('.planet-7').css('top',(600-(scrolled*.5))+'px'); 
   $('.planet-8').css('top',(200-(scrolled*.2))+'px');
   $('.planet-9').css('top',(200-(scrolled*.4))+'px');
}

