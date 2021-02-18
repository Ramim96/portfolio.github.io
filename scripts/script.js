//Scroll-spy set-up
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '.navbar'
});

var dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
dataSpyList.forEach(function (dataSpyEl) {
  bootstrap.ScrollSpy.getInstance(dataSpyEl)
    .refresh()
});

//Carousel
var myCarousel = document.querySelector('#text-carousel');
var carousel = new bootstrap.Carousel(myCarousel);

//Animate On Scroll
AOS.init();