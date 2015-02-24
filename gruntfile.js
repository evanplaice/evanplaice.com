 'use strict';

 module.exports = function(grunt) {

   grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    aws: grunt.file.readJSON("credentials.json"),
    s3: {
      options: {
        accessKeyId: "<%= aws.accessKeyId %>",
        secretAccessKey: "<%= aws.secretAccessKey %>",
        region: "us-west-2",
        bucket: "evanplaice.com"
      },
      build: {
        cwd: "",
        src: "index.html"
      }
    }
  });

  grunt.loadNpmTasks("grunt-aws");

  grunt.registerTask('sync', ['s3']);
}