// TOP NAV

Vue.component('app-index-search-bar',{
  template:'<div class="search-bar"></div>'
})

Vue.component('app-index-fesc-image',{
  template:'<div class="fesc-image-container"><a href="index.html"><img src="./images/header_logo.png" class="nav-image-left" alt="FESC logo"></a></div>'
})

Vue.component('app-index-uf-logo',{
  template:'<div class="uf-image-container"><a href="http://www.ufl.edu/" target="_blank"><img src="./images/logo-uf.png" class="nav-image-right" alt="u florida"></a></div>'
})

Vue.component('app-index-navbar-dropdown-education',{
  template:'<div class="dropdown dropbtn">education<div class="sliding-background">&nbsp;</div><div class="dropdown-content"><div class="row"><div class="column-4"><div class="dropdown-img-container"><img src="images/section/academics.jpg" alt="academics thumbnail"></div></div><div class="column-4"><h3>Educational Resources (1)</h3><a href="education-program-overview.html">General Overview</a><a href="#">Energy Education</a><a href="#">Workshops and Projects</a></div><div class="column-4"><h3>Educational Resources (2)</h3><a href="#">Certificate Program</a><a href="#">Free Online Classes</a><a href="#">Resources and Demonstrations</a></div><div class="column-4"><h3>Jobs and Training</h3><a href="#">Industry Careers</a><a href="#">Job Training</a><a href="#">Energy Extension Service</a></div></div></div></div>'
})

Vue.component('app-aux-navbar-active-education',{
  template:'<div class="dropbtn-active active-link">education<div class="sliding-background">&nbsp;</div><div class="dropdown-content"><div class="row"><div class="column-4"><div class="dropdown-img-container"><img src="images/section/academics.jpg" alt="academics thumbnail"></div></div><div class="column-4"><h3>Educational Resources (1)</h3><a href="education-program-overview.html">General Overview</a><a href="#">Energy Education</a><a href="#">Workshops and Projects</a></div><div class="column-4"><h3>Educational Resources (2)</h3><a href="#">Certificate Program</a><a href="#">Free Online Classes</a><a href="#">Resources and Demonstrations</a></div><div class="column-4"><h3>Jobs and Training</h3><a href="#">Industry Careers</a><a href="#">Job Training</a><a href="#">Energy Extension Service</a></div></div></div></div>'
})

Vue.component('app-index-navbar-dropdown-outreach',{
  template:'<div class="dropdown dropbtn">outreach<div class="sliding-background">&nbsp;</div><div class="dropdown-content"><div class="row"><div class="column"><div class="dropdown-img-container">           <img src="images/section/community-outreach-thumb.jpg" alt="Outreach thumbnail"></div></div><div class="column"><h3>Information</h3><a href="outreach-program-overview.html">Program Overview</a><a href="outreach-factSheets-chart01.html">Fact Sheets</a><a href="#">Video Clips</a></div><div class="column">   <h3>Links</h3><a href="#">Calculators and other resources</a><a href="#">Research Areas</a><a href="#">News</a></div></div></div></div>'
})

Vue.component('app-aux-navbar-active-outreach',{
  template:'<div class="dropbtn-active active-link">outreach<div class="sliding-background">&nbsp;</div><div class="dropdown-content"><div class="row"><div class="column"><div class="dropdown-img-container">           <img src="images/section/community-outreach-thumb.jpg" alt="Outreach thumbnail"></div></div><div class="column"><h3>Information</h3><a href="outreach-program-overview.html">Program Overview</a><a href="outreach-factSheets-chart01.html">Fact Sheets</a><a href="#">Video Clips</a></div><div class="column">   <h3>Links</h3><a href="#">Calculators and other resources</a><a href="#">Research Areas</a><a href="#">News</a></div></div></div></div>'
})

Vue.component('app-index-navbar-dropdown-about',{
  template:'<div class="dropdown dropbtn">about<div class="sliding-background">&nbsp;</div><div class="dropdown-content"><div class="row"><div class="column"><div class="dropdown-img-container"><img src="images/section/about.jpg" alt="about thumbnail"></div></div><div class="column"><h3>General</h3><a href="about-program-overview.html">Program Overview</a><a href="#">Faculty</a><a href="#">Visit Us</a></div><div class="column"><h3>Organization</h3><a href="#">Leadership Team</a><a href="#">University Leads</a><a href="#">Oversight and Advisory Boards</a></div></div></div></div>'
})

Vue.component('app-aux-navbar-active-about',{
  template:'<div class="dropbtn-active active-link">about<div class="sliding-background">&nbsp;</div><div class="dropdown-content"><div class="row"><div class="column"><div class="dropdown-img-container"><img src="images/section/about.jpg" alt="about thumbnail"></div></div><div class="column"><h3>General</h3><a href="about-program-overview.html">Program Overview</a><a href="#">Faculty</a><a href="#">Visit Us</a></div><div class="column"><h3>Organization</h3><a href="#">Leadership Team</a><a href="#">University Leads</a><a href="#">Oversight and Advisory Boards</a></div></div></div></div>'
})

Vue.component('app-index-navbar-dropdown-contact',{
  template:'<div class="dropdown dropbtn">contact<div class="sliding-background">&nbsp;</div><div class="dropdown-content"><div class="row"><div class="column-4"><div class="dropdown-img-container-caption"><img src="images/section/map-thumb.jpg" alt="map thumbnail"><div class="figcaption-text"><a href="http://floridaenergy.ufl.edu/about/visit-us/" target="_blank">Map and Directions</a></div></div></div><div class="column-4"><div class="dropdown-img-container-caption"><img src="images/David_Norton.jpg" alt="Director David Norton"><div class="figcaption-text"><a href="http://floridaenergy.ufl.edu/contact-us/" target="_blank">David Norton<br><span class="caption-title">Director</span></a></div></div></div><div class="column-4"><div class="dropdown-img-container-caption"><img src="images/Canan_Balaban.png" alt="Associate Director Canan Balaban"><div class="figcaption-text"><a href="http://floridaenergy.ufl.edu/contact-us/" target="_blank">Canan Balaban<br><span class="caption-title">Associate Director</span></a></div></div></div><div class="column-4"><h3>Visit Us</h3><p>University of Florida</p><p>272 Grinter Hall</p><p>Gainesville, FL 32611-5500</p></div></div></div></div>'
})

// BOTTOM NAV

Vue.component('app-aux-bottom-nav-title',{
  props:{
    title:String
  },
  template:'<div class="bottom-nav-title">{{title}}</div>'
})

Vue.component('app-aux-bottom-nav-links',{
  props:{
    title:String
  },
  template:'<div class="bottom-nav-header-wrapper slide-trigger-link"><div class="bottom-nav-header">LINKS</div></div>'
})

Vue.component('app-aux-bottom-nav-toggle',{
  props:{
    title:String
  },
  template:'<div class="bottom-nav-toggle-btn-wrapper slide-trigger "><i class="material-icons up-btn fas fa-angle-up"></i></div>'
})