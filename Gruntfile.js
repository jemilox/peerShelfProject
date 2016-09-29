module.exports = function(grunt) {

    // Config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: { //SASS on main.scss
            dist: {
                options: {
                    sourcemap: 'none',
                    style: 'compressed'
                },
                files: {
                    'src/compile.css': 'src/scss/style.scss'
                }
            }
        },
        clean: {
            build: {
                src: ['src/compile.css', 'src/compile.js']
            }
        },
        postcss: {
            options: {
                map: {
                    inline: false, // save all sourcemaps as separate files...
                },

                processors: [
                    require('autoprefixer')({ browsers: 'last 3 versions' }), // add vendor prefixes 
                ]
            },
            dist: {
                src: 'src/compile.css',
                dest: 'public/style.css'
            }
        },
        watch: {
            css: {
                files: ['src/**/*.scss'],
                tasks: ['sass', 'postcss', 'clean'],
                options: {
                    spawn: false,
                },
            },
        },
    });

    // Create Grunt Tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Create Grunt commands
    grunt.registerTask('default', ['sass', 'postcss', 'clean']);
    grunt.registerTask('css', 'sass', 'postcss');
    grunt.registerTask('dev-css', ['watch:css']);
};