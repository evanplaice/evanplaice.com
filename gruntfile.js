'use strict';

// load the environmental variables from .env
require('dotenv').load();

module.exports = function (grunt) {
  grunt.initConfig({
    aws_s3: {
      options: {
        accessKeyId: process.env.S3_ACCESSKEY,
        secretAccessKey: process.env.S3_SECRETKEY,
        region: 'us-west-2',
        uploadConcurrency: 5,
        downloadConcurrency: 5
      },
      development: {
        options: {
          bucket: 'dev.evanplaice.com',
          overwrite: true,
          differential: true,
          gzipRename: 'ext'
        },
        files: [
          { expand: true, cwd: 'jspm_packages/', src: ['**'], dest: '/jspm_packages' },
          { expand: true, cwd: 'app/', src: ['**'], dest: '/app' },
          { expand: true, cwd: 'content/', src: ['**'], dest: '/content' },
          { expand: true, src: 'index.html', dest: '/' },
          { expand: true, src: 'config.js', dest: '/' },
          { dest: '/', cwd: './', action: 'delete' }
        ]
      },
      production: {
        options: {
          bucket: 'evanplaice.com',
          overwrite: true,
          differential: true,
          gzipRename: 'ext'
        },
        files: [

          { expand: true, cwd: 'jspm_packages/', src: ['**'], dest: '/jspm_packages' },
          { expand: true, cwd: 'app/', src: ['**'], dest: '/app' },
          { expand: true, cwd: 'content/', src: ['**'], dest: '/content' },
          { dest: 'dist/app.css', cwd: './', action: 'delete' },
          { dest: 'dist/app.min.js', cwd: './', action: 'delete' },
          { dest: 'dist/app.min.map', cwd: './', action: 'delete' },
          { expand: true, cwd: 'dist/', src: ['**'], dest: '/dist', params: { ContentEncoding: 'gzip' }},
          { src: 'index.html', dest: '/' },
          { src: 'config.js', dest: '/' },
          { src: 'sitemap.xml', dest: '/' },
          { src: 'google8178f9c6a9119ad1.html', dest: '/' },
          { dest: '/', cwd: './', action: 'delete' }
        ]
      },
      content: {
        options: {
          bucket: 'evanplaice.com',
          overwrite: true,
          differential: true,
          gzipRename: 'ext'
        },
        files: [
          { expand: true, cwd: 'content/', src: ['**'], dest: '/content' },
          { dest: 'content/', cwd: './content/', action: 'delete' }
        ]
      }
    }
  });
  // load tasks
  grunt.loadNpmTasks('grunt-aws-s3');
  // assign tasks to grunt commands
  grunt.registerTask('development', ['aws_s3:development']);
  grunt.registerTask('staging', ['aws_s3:staging']);
  grunt.registerTask('production', ['aws_s3:production']);
  grunt.registerTask('content', ['aws_s3:content']);
};
