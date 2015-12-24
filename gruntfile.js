'use strict';

// load the environmental variables from .env
require('dotenv').load()

module.exports = function(grunt) {
  grunt.initConfig({
    aws_s3: {
      options: {
        accessKeyId: process.env.S3_ACCESSKEY,
        secretAccessKey: process.env.S3_SECRETKEY,
        region: 'us-west-2',
        uploadConcurrency: 5,
        downloadConcurrency: 5
      },
      production: {
        options: {
          bucket: 'evanplaice.com',
          overwrite: true,
          differential: true,
          gzipRename: 'ext'
        },
        files: [
          { expand: true, cwd: 'jspm_packages/', src: ['**'], dest: '/jspm_packages'},
          { expand: true, cwd: 'app/', src: ['**'], dest: '/app' },
          { expand: true, cwd: 'assets/', src: ['**'], dest: '/assets' },
          { expand: true, cwd: 'images/', src: ['**'], dest: '/images' },
          { expand: true, cwd: 'styles/', src: ['**'], dest: '/styles' },
          { expand: true, src: 'index.html', dest: '/' },
          { expand: true, src: 'config.js', dest: '/' },
          { dest: '/', cwd: './', action: 'delete' }
        ]
      }
    }
  });
  // load tasks
  grunt.loadNpmTasks('grunt-aws-s3');
  // assign tasks to grunt commands
  grunt.registerTask('sync', ['aws_s3:production']);
}