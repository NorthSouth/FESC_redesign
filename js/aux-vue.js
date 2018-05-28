// Bottom Nav Links

var educationLinks1 = [
  {
    name: 'Program Overview',
    url: 'education-program-overview.html',
    col: 1
  },
  {
    name: 'Energy Education',
    url: '#',
    col: 1
  },
  {
    name: 'Workshops and Projects',
    url: '#',
    col: 1
  }
]
var educationLinks2 = [
  {
    name: 'Certificate Programs',
    url: '#',
    col: 2
  },
  {
    name: 'Free Online Classes',
    url: '#',
    col: 2
  },
  {
    name: 'Demonstrations',
    url: '#',
    col: 2
  }
]
var educationLinks3 = [
  {
    name: 'Industry Careers',
    url: '#',
    col: 3
  },
  {
    name: 'Job Training',
    url: '#',
    col: 3
  },
  {
    name: 'Energy Extension Services',
    url: '#',
    col: 3
  }
]

var outreachLinks1 = [
  {
    name: 'Program Overview',
    url: 'outreach-program-overview.html',
    col: 1
  },
  {
    name: 'Fact Sheets',
    url: 'outreach-factSheets-chart01.html',
    col: 1
  },
  {
    name: 'Video Clips',
    url: '#',
    col: 1
  }
]
var outreachLinks2 = [
  {
    name: 'Calculators and other Resources',
    url: '#',
    col: 2
  },
  {
    name: 'Research Areas',
    url: '#',
    col: 2
  },
  {
    name: 'News',
    url: '#',
    col: 2
  }
]

var aboutLinks1 = [
  {
    name: 'Program Overview',
    url: 'about-program-overview.html',
    col: 2
  },
  {
    name: 'Faculty',
    url: '#',
    col: 2
  },
  {
    name: 'Visit Us',
    url: '#',
    col: 2
  }
]
var aboutLinks2 = [
  {
    name: 'Leadership Team',
    url: '#',
    col: 2
  },
  {
    name: 'University Leads',
    url: '#',
    col: 2
  },
  {
    name: 'Oversight and Advisory Boards',
    url: '#',
    col: 2
  }
]

var appAux = new Vue({
  el: '#app-aux',
  data: {}
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