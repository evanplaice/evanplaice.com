'use strict';

var app = angular.module('app', ['ngResource', 'ngRoute'])
  .config(config)
  .run(run);

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
      //controller: 'Projects'
    })
    .when('/contact', {
      title: 'Contact',
      templateUrl: 'partials/contact.html',
      //controller: ''
    })
    .otherwise({redirectTo: '/'});
};

run.$inject = ['$rootScope'];

function run($rootScope) {
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
    $rootScope.title = current.title;
  });

  if (history.pushState) {
    history.pushState({}, document.title, location.href);
  } else {
    window.location.hash = location.href;
  }
};