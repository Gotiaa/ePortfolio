(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);


document.getElementById('btn mr-lg-2 custom-btn').addEventListener('click', function () {
  var a = document.createElement('a');
  a.href = "cv.pdf";
  a.download = 'cv.pdf';
  a.click();
});

const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

let currentIndex = 0;
const articles = [
  { title: "Article 1", url: "article-1.html" },
  { title: "Article 2", url: "article-2.html" },
  { title: "Article 3", url: "article-3.html" },
  // Add more articles here as needed
];

prevBtn.addEventListener('click', function() {
  if (currentIndex > 0) {
    currentIndex--;
    location.href = articles[currentIndex].url;
  }
});

nextBtn.addEventListener('click', function() {
  if (currentIndex < articles.length - 1) {
    currentIndex++;
    location.href = articles[currentIndex].url;
  }
});
