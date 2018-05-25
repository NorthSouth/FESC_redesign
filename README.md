# HTML300-FESC_redesign
Class project case study: review and undertake partial redesign of public website (FESC: http://floridaenergy.ufl.edu/) utilizing design best practices

## WEEK 7
  1. Added an example page to demonstrate the use off Google Charts.
  
     A line chart was selected since it intuitively conveys the data as a function of time. I also added a third chart with the two data sets plotted simultaneously in order to more clearly delineate the contribution of renewable energy.
     
     link to Google Charts page: https://developers.google.com/chart/interactive/docs/gallery/linechart
  2. The chart was added to outreach>fact sheets
  3. Completed work on building out the page templates for all 4 top-level nav categories (education, outreach, about and contact).
  4. Updated/propogated changes to the main nav to all active parts of the site; UF logo image link parallels style of UF site in header design.
  
## WEEK 6
  1. Major build out of styling and coding for site.
  2. Implemented several new features including a slide show, parallax viewer and bottom nav on secondary page
  3. Still a WIP - main mega menu on secondary page needs to be tweaked to work with the new format
  4. github bug related to the background image on the secondary page not loading
  5. NOTE: outreach > program overview is the only other page currently with additional content. 

## WEEK 5
  1. HTML framework for main page is nearly complete (replaced placeholder bootstrap layout in dropdown with custom code; built out footer)
  2. Styling for main page is nearly complete (implemented styling to match the look and feel of the UFL parent site: drop-down mega menu animation, on-hover effects for social media icons)
  3. Utilized more of SASS's capabilities

## WEEK 4
  1. Built out main page of site
  2. Added preminary styling to match design doc mock up
  3. Still addressing some issues with formatting
  4. Discovered source of errors in github interpreting @font-face and background image ...
  
     For @font-face:
     
       ````
       src: url("../fonts/Enriqueta-Regular.ttf") format("truetype");
       
       ````
     For background image:
     
       ````
       background: url(../images/main-menu-hover.png) no-repeat;
       ````
       
     In both cases, it's a problem with the relative path ... apparently when referencing 'url' it's relative to the file that called it (in this case, css/style.css) and not the main directory of the repository
     
     For @font-face, github doesn't seem to understand 'woff'-format fonts and also requires the format descriptor ... as well as quotation marks around the path
     
     For background image, it's just a matter of fixing the relatiev path
  
## WEEK 3
  1. Created docs folder
  2. Added Design Plan document (design inspiration, site overhaul plan and mock up)

## WEEK 1/2
  1. Added ASANA project board (https://app.asana.com/0/622197886891195/list)
  2. Added site analysis and re-design proposal doc
  

