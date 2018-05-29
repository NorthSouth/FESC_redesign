

function mouseOver() {
  /*console.log("eek! a mouse", this);*/
}

function mouseOut() {
    document.getElementById("demo").style.color = "black";
}


var ids = document.querySelectorAll('[id]');

function refreshTopNav() {
  location.reload(forceGet);
}


function onClickHeroBtn() {
  document.getElementById("hero-image-overlay").style.display="block";
  document.getElementById("hero-image-text").style.display="none";
  document.getElementById("hero-nav-button").style.display="none";
   document.getElementById("hero-image-overlay").classList.add("hero-image-button-clicked");
  document.getElementById("hero-image-overlay").style.opacity=fadeAnimationFinalOpacity;
  document.getElementById("image-overlay-info").style.display="block"; 
}

function onClickOverlay(){
  document.getElementById("hero-image-overlay").style.display="none";
  document.getElementById("image-overlay-info").style.display="none"; 
  document.getElementById("hero-image-overlay").classList.remove("hero-image-button-clicked");
  document.getElementById("hero-image-text").style.display="block";
}

// slide show functions

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function closeSlideShow(){
  var overlayInfo = document.getElementById("image-overlay-info");
  var overlayImage = document.getElementById("hero-image-overlay");
  
  
  var heroImage = document.getElementById("hero-image-text").style.display="block";
  var heroButton = document.getElementById("hero-nav-button").style.display="block";
  
  
  var iframes = document.getElementsByTagName("iframe");
  
  overlayInfo.style.display="none";
  overlayImage.style.display="none";
  currentSlide(1);
  
  if (iframes != null) {
    for (var i = 0; i < iframes.length; i++) {
        iframes[i].src = iframes[i].src; //causes a reload so it stops playing, music, video, etc.
    }
  }
}

// YOUTUBE PLAYERS


// viewport size test functions

function getViewport() {

 var viewPortWidth;
 var viewPortHeight;

 // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
  
 if (typeof window.innerWidth != 'undefined') {
   viewPortWidth = window.innerWidth,
   viewPortHeight = window.innerHeight
 }
  
}

// slide show variables
var slideIndex = 1;
showSlides(slideIndex);


// main variables

var fadeAnimationFinalOpacity=.8;

var imgBtnNodeList= document.getElementsByClassName("hero-nav-button");

for (i=0; i<imgBtnNodeList.length; i++){
  imgBtnNodeList[i].addEventListener("click", onClickHeroBtn);
}

var imgOverlayNodeList= document.getElementsByClassName("image-overlay-info");


var imgOverlayNodeList= document.getElementsByClassName("hero-image-overlay");

for (i=0; i<imgOverlayNodeList.length; i++){
  imgOverlayNodeList[i].addEventListener("click", onClickOverlay);
}

//will be youtube player references once API is loaded
var players = [];

