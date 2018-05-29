var appAux = new Vue({
  el: '#app-aux',
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
    url: function (e) {
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

var appAuxFooter = new Vue({
  el: '#app-aux-footer',
  data: {
    footerNav: [
      {
        title: ''
      },
    ],
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
    linkSort: function (category, col, name) {

      let excludeName = [name];
      let slideTrigger = document.querySelector('.slide-trigger');
     
      switch (category) {
        case "Education":
          {
            switch (col) {
              case 1:
                {
                  this.edLinks1 = educationLinks1.filter(name_t => !excludeName.includes(name_t.name));
                }
                break;
              case 2:
                {
                  this.edLinks2 = educationLinks2.filter(name_t => !excludeName.includes(name_t.name));
                }
                break;
              case 3:
                {
                  this.edLinks3 = educationLinks3.filter(name_t => !excludeName.includes(name_t.name));
                }
                break;
            }
          }
          break;
      };
      switch (category) {
        case "Outreach":
          {
            switch (col) {
              case 1:
                {
                  this.orLinks1 = outreachLinks1.filter(name_t => !excludeName.includes(name_t.name));
                }
                break;
              case 2:
                {
                  this.orLinks2 = outreachLinks2.filter(name_t => !excludeName.includes(name_t.name));
                }
                break;
            }
          }
          break;
      };
      switch (category) {
        case "About":
          {
            switch (col) {
              case 1:
                {
                  this.abtLinks1 = aboutLinks1.filter(name_t => !excludeName.includes(name_t.name));
                }
                break;
              case 2:
                {
                  this.abtLinks2 = aboutLinks2.filter(name_t => !excludeName.includes(name_t.name));
                }
                break;
            }
          }
          break;
      };
    },
    url: function (e) {
      return e.url;
    }
  }
})