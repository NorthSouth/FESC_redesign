function scrollToTop() {
  element.scrollIntoView(true); // Top
}

function toggleToTopButton() {
  // detects whether vertical scrollbars are present - if they are, toggle visibility of 'back-to-top' button
  
  var rootElem = document.documentElement || document.body
  
  if (rootElem.scrollHeight > rootElem.clientHeight) {
    document.getElementsByClassName("up-btn-wrapper")[0].setAttribute("style", "display:block");
  } else {
    document.getElementsByClassName("up-btn-wrapper")[0].setAttribute("style", "display:none");
  }

}

function assignBackgroundImage() {
  var pageTitle = document.getElementsByClassName("pageTitle")[0].id;
  /*document.getElementsByTagName("h1")[0].innerHTML=pageTitle; */

  console.log("Page title:" + pageTitle);

  // add modularity by detecting pageTitle attribute and assigning a background image to top of page
  switch(pageTitle) {
    case "about":
      document.getElementsByClassName("hero-nav")[0].setAttribute("style", "background-image:url(images/section/about3.jpg);");
      break;
    case "outreach":
      document.getElementsByClassName("hero-nav")[0].setAttribute("style", "background-image:url(images/section/community-outreach-banner.jpg);");
      break;
    case "data":
      document.getElementsByClassName("hero-nav")[0].setAttribute("style", "background-image:url(images/section/data-banner.jpg);");
      break;
    case "education":
      document.getElementsByClassName("hero-nav")[0].setAttribute("style", "background-image:url(images/section/education-banner.jpg);");
      break;
  }

}

/*var element = document.getElementById("main-content-wrapper");*/
var element = document.getElementById("hero-nav");

assignBackgroundImage();
toggleToTopButton();