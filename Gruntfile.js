module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });
    
        htmlhint: {
            build: {
                options: {
                     'tag-pair': true,                      
// Force tags to have a closing pair
                    'tagname-lowercase': true,             
// Force tags to be lowercase
                    'attr-lowercase': true,                
// Force attribute names to be lowercase e.g. <div id="header"> is invalid
                    'attr-value-double-quotes': true,      
// Force attributes to have double quotes rather than single
                    'doctype-first': true,                 
// Force the DOCTYPE declaration to come first in the document
                    'spec-char-escape': true,              
// Force special characters to be escaped
                    'id-unique': true,                     
// Prevent using the same ID multiple times in a document
                    'head-script-disabled': true,          
// Prevent script tags being loaded in the  for performance reasons
                    'style-disabled': true                 
// Prevent style tags. CSS should be loaded through 
                },
                src: ['index.html']
            }
        },
        
        uglify: {
            build: {
                files: {
                    'build/js/base.min.js': ['assets/js/base.js']
                }
            }
        },
        
        cssmin: {
            build: {
                src: 'build/css/master.css',
                dest: 'build/css/master.css'
            }
        },

        watch: {
            html: {
                files: ['index.html'],
                tasks: ['htmlhint']
            },
            js: {
                files: ['assets/js/base.js'],
                tasks: ['uglify']
            },
            css: {
                files: ['assets/sass/**/*.scss'],
                tasks: ['buildcss']
            }
        }

    grunt.registerTask('default', ['jshint', 'less']);
    grunt.registerTask('test', ['jshint', 'less']);
    grunt.registerTask('bbuildcss', ['jshint', 'uglify', 'less']);
    grunt.registerTask('production', ['jshint', 'uglify', 'less']);

};
