# MAG Land Use Map Viewer

[![GitHub version](https://badge.fury.io/gh/boennemann%2Fbadges.svg)](https://github.com/vwolfley/MyProject/)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![dependencies](https://david-dm.org/vwolfley/MyProject.png)](https://david-dm.org/vwolfley/MyProject)
[![Semver](http://img.shields.io/SemVer/2.0.0.png)](http://semver.org/spec/v2.0.0.html)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/hyperium/hyper/master/LICENSE)
[![GitHub release](https://img.shields.io/github/release/qubyte/rubidium.svg?maxAge=2592000)](https://github.com/vwolfley/MyProject/blob/master/package.json)

The Land Use Map Viewer is one of the Maricopa Association of Governments (MAG) interactive mapping and analysis sites, showing land use data.

Use this site to explore existing and future land use.

The MAG Land Use Maps viewer allows the user to graphically view land use data for all areas of Maricopa County, Arizona.  The viewer provides interactive mapping and reporting tools to allow exploration of the MAG existing and future land use datasets.  The existing land use dataset is created by integrating GIS datasets from a variety of sources including the Maricopa County Assessor's Office, Arizona State Trust and Federal ownership.  The future land use dataset is created by overriding areas with developable land uses (e.g. vacant agriculture) with anticipated land uses prescribed within municipal developments and general plans.

This JavaScript web app viewer was developed by MAG staff for MAG member agencies and the public using ESRI's JavaScript API.

### Keywords

`Land Use` `Existing Land Use` `EXLU` `Future Land Use` `FLU` `Maricopa County` `Maps` `MAG` `ESRI` `#MAGmaps`

#### `version 2.2.2` ####
 `Updated: 04/28/2016`
 `Created: 10/21/2014`

Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

1. MAJOR version when you make incompatible API changes **bumps the major** resets minor and patch
2. MINOR version when you add functionality in a backwards-compatible manner **bumps the minor** resets patch
3. PATCH version when you make backwards-compatible bug fixes and misc changes **bumps only the patch**

***************************************************************************************************************

### Credits

### Site URL's

* [Site] (http://geo.azmag.gov/maps/landuse/)

* [Test Site] (http://geo.azmag.gov/maps/test/landuse/)

* [Deprecated Site] (http://geo.azmag.gov/maps/landuse_sl)

### Documentation

A detailed list of the changes and fixes in each version update can be found in the CHANGELOG.md.

* [Change Log] (CHANGELOG.md)

### Process

### Resources

### Legal Disclaimer

### Copyright and Licensing

Code released under the MIT license.

- [LICENSE] (LICENSE.txt)

Copyright (c) 2016 Vern Wolfley

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

### Folder Structure

    --Project folder
        --assets
            --data
            --mxds
            --img
            --docs
        --name_project
            --css
            --img
            --js
                --vendor
            --views
        --deploy
            --build_#.#.#
