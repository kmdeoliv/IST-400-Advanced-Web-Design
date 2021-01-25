$('.navigation a').customScroll({duration:1000});

$(document).ready(function(){
      $('.image-slider').slick({
      	dots: true,
      	arrows: false,
      	fade: true,
      	autoplay:true,
      	autoplaySpeed: 2000
       
      });
    });

    var myElement = document.querySelector("header");
			// construct an instance of Headroom, passing the element
			var headroom = new Headroom(myElement, {
  
  "classes": {
   
    "unpinned": "unpinned"
  }
});
			headroom.init(); 