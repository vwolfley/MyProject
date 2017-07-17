module.exports = function(grunt) {

    "use strict";

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        options: {
            base: "app",
            dist: "//MAG1113/ArcGISVirtualRoot/maps/vw/employ/app",
        },

        bannercss: '/*! ========================================================================\n' +
            ' * Maricopa Association of Governments\n' +
            ' * CSS files for MAG Employment Map Viewer\n' +
            ' * @concat.min.css | @version | <%= pkg.version %>\n' +
            ' * Production | <%= pkg.date %> \n' +
            ' * http://ims.azmag.gov/\n' +
            ' * MAG Employment Map Viewer\n' +
            ' * ==========================================================================\n' +
            ' * @Copyright <%= pkg.copyright %> MAG\n' +
            ' * @License MIT\n' +
            ' * ========================================================================== */\n',

        htmlhint: {
            build: {
                options: {
                    "tag-pair": true, // Force tags to have a closing pair
                    "tagname-lowercase": true, // Force tags to be lowercase
                    "attr-lowercase": true, // Force attribute names to be lowercase e.g. <div id="header"> is invalid
                    "attr-value-double-quotes": true, // Force attributes to have double quotes rather than single
                    // "doctype-first": true,           // Force the DOCTYPE declaration to come first in the document
                    "spec-char-escape": true, // Force special characters to be escaped
                    "id-unique": true, // Prevent using the same ID multiple times in a document
                    // "head-script-disabled": false,   // Prevent script tags being loaded in the head for performance reasons
                    "style-disabled": true // Prevent style tags. CSS should be loaded through
                },
                src: ["src/index.html", "src/app/views/*.html"]
            }
        },

        jshint: {
            files: ["src/config.js", "src/app/*.js", "src/app/config/*.js", "src/app/helpers/*.js", "src/app/models/*.js", "src/app/vm/*.js"],
            options: {
                // strict: true,
                sub: true,
                quotmark: "double",
                trailing: true,
                curly: true,
                eqeqeq: true,
                unused: true,
                scripturl: true, // This option defines globals exposed by the Dojo Toolkit.
                dojo: true, // This option defines globals exposed by the jQuery JavaScript library.
                jquery: true, // Set force to true to report JSHint errors but not fail the task.
                force: true,
                reporter: require("jshint-stylish-ex")
            }
        },

        uglify: {
            options: {
                // add banner to top of output file
                banner: '/*! main.js | <%= pkg.name %> - v<%= pkg.version %> | <%= grunt.template.today("mm-dd-yyyy") %> */\n'
            },
            build: {
                files: {
                    // config files
                    "../deploy/build.min/app/config/cbrConfig.js": ["app/config/cbrConfig.js"],
                    "../deploy/build.min/app/config/colorRampConfig.js": ["app/config/colorRampConfig.js"],
                }
            }
        },

        csslint: {
            options: {
                csslintrc: ".csslintrc",
                formatters: [{
                    id: require("csslint-stylish"),
                    dest: "reports/csslint_stylish.xml"
                }]
            },
            strict: {
                options: {
                    import: 2
                },
                src: ["src/app/resources/css/main.css"]
            },
            lax: {
                options: {
                    import: false
                },
                src: ["src/app/resources/css/main.css"]
            }
        },

        cssmin: {
            options: {
                specialComments: "all",
                processImport: false,
                roundingPrecision: -1,
                mergeIntoShorthands: false,
                advanced: false,
            },
            target: {
                files: [{
                    expand: true,
                    cwd: "src/app/resources/css",
                    src: ["normalize.css", "main.css"],
                    dest: "dist/app/resources/css",
                    ext: ".min.css"
                }]
            }
        },

        concat: {
            options: {
                stripBanners: true,
                banner: "<%= bannercss %>\n"
            },
            dist: {
                src: ["dist/app/resources/css/normalize.min.css", "dist/app/resources/css/main.min.css"],
                dest: "dist/app/resources/css/concat.min.css"
            }
        },

        clean: {
            build: {
                src: ["dist/"]
            }
        },

        copy: {
            build: {
                cwd: "src/",
                src: ["**"],
                dest: "dist/",
                expand: true,
                dot: true
            }
        },

        watch: {
            html: {
                files: ["index.html"],
                tasks: ["htmlhint"]
            },
            css: {
                files: ["app/resources/css/main.css"],
                tasks: ["csslint"]
            },
            js: {
                files: ["app/main.js"],
                tasks: ["jshint"]
            }
        },

        versioncheck: {
            options: {
                skip: ["semver", "npm", "lodash"],
                hideUpToDate: false
            }
        },

        replace: {
            update_Meta: {
                src: ["src/index.html", "src/config.js", "src/humans.txt", "README.md", "src/app/resources/css/main.css"], // source files array
                // src: ["README.md"], // source files array
                overwrite: true, // overwrite matched source files
                replacements: [{
                    // html pages
                    from: /(<meta name="revision-date" content=")[0-9]{2}\/[0-9]{2}\/[0-9]{4}(">)/g,
                    to: '<meta name="revision-date" content="' + '<%= pkg.date %>' + '">',
                }, {
                    // html pages
                    from: /(<meta name="version" content=")([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))(">)/g,
                    to: '<meta name="version" content="' + '<%= pkg.version %>' + '">',
                }, {
                    // config.js
                    from: /(v)([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))( \| )[0-9]{2}\/[0-9]{2}\/[0-9]{4}/g,
                    to: 'v' + '<%= pkg.version %>' + ' | ' + '<%= pkg.date %>',
                }, {
                    // humans.txt
                    from: /(Version\: )([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/g,
                    to: "Version: " + '<%= pkg.version %>',
                }, {
                    // humans.txt
                    from: /(Last updated\: )[0-9]{2}\/[0-9]{2}\/[0-9]{4}/g,
                    to: "Last updated: " + '<%= pkg.date %>',
                }, {
                    // README.md
                    from: /(### version )([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/g,
                    to: "### version " + '<%= pkg.version %>',
                }, {
                    // README.md
                    from: /(`Updated: )[0-9]{2}\/[0-9]{2}\/[0-9]{4}/g,
                    to: "`Updated: " + '<%= pkg.date %>',
                }, {
                    // main.css
                    from: /(@main.css)( \| )(@version)( \| )([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/g,
                    to: "@main.css | @version |" + ' <%= pkg.version %>',
                }]
            }
        }


    });

    // this would be run by typing "grunt test" on the command line
    // grunt.registerTask("test", ["uglify", "cssmin", "concat"]);

    grunt.registerTask("check", ["versioncheck"]);

    grunt.registerTask("work", ["jshint"]);

    grunt.registerTask("workcss", ["csslint"]);

    grunt.registerTask("testcss", ["cssmin"]);

    grunt.registerTask("buildcss", ["cssmin", "concat"]);

    grunt.registerTask("update", ["replace"]);

    // grunt.registerTask("build", ["replace", "cssmin", "concat"]);
    grunt.registerTask("build", ["clean", "replace", "copy", "cssmin", "concat"]);

    // the default task can be run just by typing "grunt" on the command line
    grunt.registerTask("default", []);

};

// ref
// http://coding.smashingmagazine.com/2013/10/29/get-up-running-grunt/
// http://csslint.net/about.html
// http://www.jshint.com/docs/options/
