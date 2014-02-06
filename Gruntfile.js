module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // cssmin: {
    //   minify: {
    //     files: {
    //       'app/_build/libs.min.css': ['app/vendor/src/**/*.css']
    //     }
    //   }
    // },
    compass: {
      dev: {
        options: {
          sassDir: 'app/sass',
          cssDir: 'app/css'
        }
      }
    },
    jekyll: {
      server : {
        // for some reason options won't apply if this is missing...
      },
      options: {
        src: 'app'
      }
    },
    jshint: {
      all: ['Gruntfile.js']
    },
    watch: {
      scripts: {
        files: 'app/**/*',
        tasks: ['jshint','compass','jekyll'],
        options: {
          interrupt: true
        },
      },
    }
  });

  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Default task(s).
  grunt.registerTask('default', ['jshint','compass','jekyll']);

  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });

};