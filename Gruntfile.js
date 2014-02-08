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
    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ';'
      },
      dist: {
        files: {
          'app/_build/_libs.min.js': ['app/_vendor/**/*.js'],
          'app/_build/app.min.js': ['app/_js/*.js'],
          '_site/css/app.min.css': ['app/_css/*.css']
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          '_site/js/app.min.js': ['app/_build/*.js']
        }
      }
    },
    compass: {
      dev: {
        options: {
          sassDir: 'app/_sass',
          cssDir: 'app/_css'
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
      all: ['Gruntfile.js','app/_js/*.js','app/_vendor/**/*.js']
    },
    watch: {
      scripts: {
        files: 'app/**/*',
        tasks: ['jshint','compass','jekyll','concat','uglify'], // @todo change eventually
        options: {
          interrupt: true
        },
      },
    }
  });

  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Default task(s).
  grunt.registerTask('default', ['jshint','compass','jekyll','concat','uglify']);

  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });

};