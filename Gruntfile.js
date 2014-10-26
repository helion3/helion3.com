module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Combine compiled files into destination libs
    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ';'
      },
      dist: {
        files: {
          '_site/css/app.min.css': ['_tmp/app.css'],
          '_site/css/sequent.min.css': ['_tmp/sequent.css']
        }
      }
    },

    // Minify all javascript
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          '_site/js/app.min.js': ['app/_vendor/**/*.js','app/_js/*.js']
        }
      }
    },

    // Parse SASS/COMPASS
    compass: {
      dev: {
        options: {
          sassDir: 'app/_sass',
          cssDir: '_tmp'
        }
      }
    },

    cssmin: {
      combine: {
        files: {
          '_site/css/app.min.css': ['_tmp/app.css'],
          '_site/css/sequent.min.css': ['_tmp/sequent.css']
        }
      }
    },

    // Publish blog/site content
    jekyll: {
      server : {
        // for some reason options won't apply if this is missing...
      },
      options: {
        src: 'app'
      }
    },

    // Check javascript
    jshint: {
      all: ['Gruntfile.js','app/_js/*.js','app/_vendor/**/*.js']
    },

    // Run tasks as needed
    watch: {
      js: {
        files: [
          'app/**/*.js',
          'Gruntfile.js'
        ],
        tasks: ['jshint','concat','uglify']
      },
      css: {
        files: [
          'app/_sass/*.scss'
        ],
        tasks: ['compass','concat']
      },
      jekyll: {
        files: ['app/**/*.html','app/**/*.md'],
        tasks: ['jekyll']
      }
    },

  });

  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['jshint','compass','jekyll','concat','uglify','watch']);

  grunt.registerTask('deploy', ['jshint','compass','jekyll','uglify','cssmin']);

  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });

};