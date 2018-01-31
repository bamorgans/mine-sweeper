module.exports = function (grunt) {

    grunt.config.init({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            staticfiles: {
                expand: true,
                flatten: true,
                src: 'static/*',
                dest: 'dist/',
            },
            htmlfile : {
                expand: true,
                src: 'index.html',
                dest: 'dist/',
            }
        }
    });

    //loading plugin for copy
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['copy']);

};
