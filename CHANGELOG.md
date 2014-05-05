# CHANGELOG for Demographics Website

[![Semver](http://img.shields.io/SemVer/2.0.0.png)](http://semver.org/spec/v2.0.0.html)

`Major/Minor/Patch 0.0.0`

### Version 1.0.1 (02/25/2014)

* added the [Esri Boostrap-map] (https://github.com/Esri/bootstrap-map-js)
* added the [HTML5 Boilerplate] (https://github.com/h5bp/html5-boilerplate)
* added the [HTML5 Shiv] (https://github.com/aFarkas/html5shiv)
* fixed Median Age in Demographics Summary Report so that it does not sum
* fixed Median Household Income in Demographics Summary Report so that it does not sum
* fixed Median Housing Values in Demographics Summary Report so that it does not sum
* fixed Median Rent in Demographics Summary Report so that it does not sum
* added conditional statement to demographic-vm to allow median values when single track/value is selected

### Version 1.0.0 (01/28/2014)

* went live - [Live Site] (http://geo.azmag.gov/maps/demographic)
* deprecated sliver light site - [Deprecated Site] (http://geo.azmag.gov/maps/demographic_sl)
* changed test links to new live links


### Version 0.3.1 (01/09/2014)

* updated url's to census data
* now using ACS data from 2008-2012
* changed PLACE_NAME to NAME10 in demographicConfig.js
* changed the styling of the homeButton
* reconfigured legend with kendo panel menu for layer options
* retooling title bar for responsive CSS
* updated printing layouts
* added new printing layouts
* changed CSS styles to be more mobile friendly
* updated language in help menus

### Version 0.3.0 (01/06/2014)

* updated to ArcGIS API for JavaScript - Version 3.8
* added Verify button on advanced Query
* updated help menus
* styled chart area in demographic viewer
* changed display formate of info in chart area
* added tabs to the main help menu
* Summary Report - take out % where there is not data
* Summary Report - add divider to main header when comparison is checked
* change selected features to selected block groups
* changed legend titles for bar graphs

### Version 0.2.0 (12/04/2013)

* updated advanced query files (GISi)
* added humans.txt file (html5 boilerplate)
* added robots.txt file (html5 boilerplate)
* added 404.html file (html5 boilerplate)
* added modernizer-2.6.2.min (html5 boilerplate)
* added crossdomian.xml (html5 boilerplate)
* added Knockout2.2.0
* added HTML5 enabling script (Remy Sharp)
* added "County" field to the selected block groups window (demographic-vm.js)
* changed server setting allowing a query of up to 3,000 features
* changed default color settings for each map group (cbrConfig.js)

### Version 0.1.2 (12/03/2013)

* made changes to demographic-vm and kendo grid table for comparisons
* added meta tags to index page
* added Google analytics --still needs ID code
* updated help window titles

### Version 0.1.1 (11/12/2013)

* custom media queries for better look on mobile devices
* fixed kendo grid order
* modified GET button on reports tab
* changed the dpi on the printing function to 96 from 300 to increase print speed
* fixed sort order of cites in drop down menu
* removed densities from tables in reports
* added ability to compare cites in custom summary report
* updated data so there are no NO DATA blank areas
* added collapse menus when new menu is clicked on reports tab
* added source data text to legend
* updated help menus
* added alert when query is over 1,000 records
* added zoom to function when city/town or custom summaries are used
* updated print/export icons in Selected Features and Summary Report to show excel icon

### Version 0.1.0 (05/22/2013)

* ArcGIS API for JavaScript - Version 3.7
* kendo

## Resources / Examples

- ***ESRI REST services***

    * http://server.arcgisonline.com/ArcGIS/rest/services
    * http://services.arcgisonline.com/ArcGIS/rest/services

- ***Blog resorces***

    * http://blogs.esri.com/esri/arcgis/2009/07/13/the-map-sandwich/
    * http://blogs.esri.com/esri/arcgis/2011/09/29/esri-canvas-maps-part-i-author-beautiful-web-maps-with-our-new-artisan-basemap-sandwich/
    * https://developers.arcgis.com/en/javascript/jsapi/basemaplayer-amd.html#basemaplayer1

- ***jQuery Scrollbar ref***

    * http://manos.malihu.gr/jquery-custom-content-scroller/
    * http://www.yuiazu.net/perfect-scrollbar/

- ***TOC ref***

    * http://gmaps-utility-gis.googlecode.com/svn/tags/agsjs/latest/examples/toc.html
    * http://www.roktech.net/_blog/ROK_Blog/post/ArcGIS_Server_JS_API_-_Table_of_Contents_%28TOC%29_Example/
    * http://maps.roktech.net/demo/toc_example/index.htm
    * http://driskull.github.io/arcgis-dijit-layer-legend-js/

- ***Social Buttons ref***

    * google - https://developers.google.com/+/web/+1button/
    * facebook - http://developers.facebook.com/docs/plugins/like-button/
    * linked in - http://developer.linkedin.com/plugins/share-plugin-generator
    * twitter - https://twitter.com/about/resources/buttons#tweet
    * http://www.blackfishweb.com/blog/asynchronously-loading-twitter-google-facebook-and-linkedin-buttons-and-widgets-ajax-bonus

- ***Media Screens ref***

    * http://stephen.io/mediaqueries/
    * http://www.kendoui.com/blogs/teamblog/posts/13-01-22/responsive_design_with_twitter_bootstrap.aspx

- ***Cache Question***

    * http://resources.arcgis.com/en/help/arcgisonline-content/index.html#//011q00000005000000

- ***Icons***

    * http://icongal.com/gallery/icon/30866/128/close

- ***Demos***

    * http://demo.dtsagile.com/backbone/MapExtent
    * http://demo.dtsagile.com/backbone/SearchApp
    
- **Articals**
   
   * http://tech.pro/tutorial/1190/package-managers-an-introductory-guide-for-the-uninitiated-front-end-developer#front_end_developers
