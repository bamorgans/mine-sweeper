module.exports = function (grunt) {

    grunt.config.init({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            cssfiles: {
                expand: true,
                cwd: 'static/',
                src: '**/*.css',
                dest: 'dist',
            },
            imgfiles: {
                expand: true,
                cwd: 'static/',
                src: '**/*.*',
                dest: 'dist',
            },
            htmlfile: {
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
