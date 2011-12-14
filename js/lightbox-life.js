 $(document).ready(function(){  
   $("a#show-emailus-question").click(function(){  
     $("#lightbox, #lightbox-panel, #lightbox-container").fadeIn(500);  
   });  
   $("a#close-panel").click(function(){  
     $("#lightbox, #lightbox-panel, #lightbox-container, #lightbox-container-2, #lightbox-container-3, #lightbox-container-sav").fadeOut(500);  
   });  
 })  
 $(document).ready(function(){  
   $("area#show-emailus-title").click(function(){  
     $("#lightbox, #lightbox-panel, #lightbox-container").fadeIn(500);  
   });  
   $("a#close-panel").click(function(){  
     $("#lightbox, #lightbox-panel, #lightbox-container, #lightbox-container-2, #lightbox-container-3, #lightbox-container-sav").fadeOut(500);  
   });  
 })  
 $(document).ready(function(){  
   $("a#show-promotion-question").click(function(){  
     $("#lightbox, #lightbox-panel, #lightbox-container-2").fadeIn(500);  
   });  
   $("a#close-panel").click(function(){  
     $("#lightbox, #lightbox-panel, #lightbox-container, #lightbox-container-2, #lightbox-container-3, #lightbox-container-sav").fadeOut(500); 
	 var url = "Thankyou.htm";
     $(location).attr('href',url);
   });  
 })  
 $(document).ready(function(){  
   $("a#show-emailus-sav").click(function(){  
     $("#lightbox, #lightbox-panel, #lightbox-container-sav").fadeIn(500);  
   });  
   $("a#close-panel").click(function(){  
     $("#lightbox, #lightbox-panel, #lightbox-container, #lightbox-container-2, #lightbox-container-3, #lightbox-container-sav").fadeOut(500);  
   });  
 })  
 $(document).ready(function(){  
   $("a#show-promotion-question-en").click(function(){  
     $("#lightbox, #lightbox-panel, #lightbox-container-3").fadeIn(500);  
   });  
   $("a#close-panel").click(function(){  
     $("#lightbox, #lightbox-panel, #lightbox-container, #lightbox-container-2, #lightbox-container-3, #lightbox-container-sav").fadeOut(500);  
   });  
 })  
