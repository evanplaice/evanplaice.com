 'use strict';

 module.exports = function(grunt) {
   grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    credentials: grunt.file.readJSON('credentials.json'),
    s3: {
      options: {
        accessKeyId: '<%= credentials.aws.accessKeyId %>',
        secretAccessKey: '<%= credentials.aws.secretAccessKey %>',
        region: 'us-west-2',
        bucket: 'evanplaice.com'
      },
      build: {
        cwd: 'public',
        src: ['**/*']
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
      all: {
        options:{
          port: 9000,
          hostname: '0.0.0.0',
          base: 'public',
          livereload: true
        }
      }
    },
    open: {
      all: {
        path: 'http://localhost:<%= connect.all.options.port%>'
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
        files: ['public/**.*']
      },
      sass: {
        files: ['public/**/*.sass'],
        tasks: ['sass'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-aws');
  grunt.loadNpmTasks('grunt-release');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('sync', ['s3']);
  grunt.registerTask('bump', ['release']);
  grunt.registerTask('start', ['open', 'connect', 'watch']);
}