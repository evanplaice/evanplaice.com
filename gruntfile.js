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
        cwd: "",
        src: "index.html"
      }
    },
    release: {
      options: {
        file: 'package.json',
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
    }
  });

  grunt.loadNpmTasks('grunt-aws');
  grunt.loadNpmTasks('grunt-release');

  grunt.registerTask('sync', ['s3']);
  grunt.registerTask('bump', ['release']);
}