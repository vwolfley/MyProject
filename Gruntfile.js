module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });

    grunt.registerTask('default', ['jshint', 'less']);
    grunt.registerTask('test', ['jshint', 'less']);
    grunt.registerTask('build', ['jshint', 'uglify', 'less']);
    grunt.registerTask('production', ['jshint', 'uglify', 'less']);

};
