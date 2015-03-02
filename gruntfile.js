 'use strict';

 module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    credentials: grunt.file.readJSON('credentials.json'),
    aws_s3: {
      options: {
        accessKeyId: '<%= credentials.aws.accessKeyId %>',
        secretAccessKey: '<%= credentials.aws.secretAccessKey %>',
        region: 'us-west-2',
        uploadConcurrency: 5,
        downloadConcurrency: 5
      },
      production: {
        options: {
          bucket: 'evanplaice.com',
          differential: true,
          gzipRename: 'ext'
        },
        files: [
          { expand: true, cwd: 'public/', src: ['**'], dest: '/' }
        ]
      }
    },
    release: {
      options: {
        file: 'package.json',
        additionalFiles: ['bower.json'],
        add: true,
        commit: true,
        tag: true,
        push: true,
        pushTags:true,
        npm: false,
        github: {
          repo: 'evanplaice/evanplaice.com',
          usernameVar: '<%= credentials.github.username %>',
          passwordVar: '<%= credentials.github.password %>',
        }
      }
    },
    connect: {
      livereload: {
        options: {
          open: true,
          port: 8080,
          hostname: 'localhost',
          base: 'public',
          livereload: true,
          middleware: function (connect, options) {
            var optBase = (typeof options.base === 'string') ? [options.base] : options.base;
            return [require('connect-modrewrite')(['!(\\..+)$ / [L]'])]
              .concat(optBase.map(function(path){ return connect.static(path); }));
          }
        }
      }
    },
    sass: {
      dev: {
        options: {
          style: 'expanded',
          sourcemap: 'none'
        },
        files: {
          'styles/main.css': 'styles/main.sass'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      all: {
        files: [
        'public/*.*',
        'public/**/*.*'
        ]
      },
      sass: {
        files: ['public/**/*.sass'],
        tasks: ['sass'],
      }
    }
  });


  grunt.loadNpmTasks('grunt-aws-s3');
  grunt.loadNpmTasks('grunt-release');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('sync', ['aws_s3:production']);
  grunt.registerTask('bump', ['release']);
  grunt.registerTask('start', ['connect', 'watch']);
}