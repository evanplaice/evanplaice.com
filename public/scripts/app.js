'use strict';

var app = angular.module('app', ['ngResource', 'ngRoute']).config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config($routeProvider, $locationProvider) {
  // enable html5 mode routes
  $locationProvider.html5Mode(true).hashPrefix('!');

  // routes
  $routeProvider
    .when('/', {
      title: 'Welcome',
      templateUrl: 'partials/home.html',
      //controller: 'Home'
    })
    .when('/posts', {
      title: 'Request for Consideration',
      templateUrl: 'partials/posts.html',
      //controller: 'Posts'
    })
    .when('/projects', {
      title: 'Projects',
      templateUrl: 'partials/projects.html',
      controller: 'Projects'
    })
    .otherwise({redirectTo: '/'});
};