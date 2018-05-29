var appIndex = new Vue ({
  el:'#app-index',
  data: {    
    edLinks1: educationLinks1,
    edLinks2: educationLinks2,
    edLinks3: educationLinks3,
    orLinks1: outreachLinks1,
    orLinks2: outreachLinks2,
    abtLinks1: aboutLinks1,
    abtLinks2: aboutLinks2,
    edNav: educationNav,
    orNav: outreachNav,
    abtNav: aboutNav
  },
  methods: {
    url: function(e) {
      return e.url;
    },
    srcI: function(e) {
      return e.imgSrc;
    },
    altI: function(e) {
      return e.imgAlt;
    }
  }
})

