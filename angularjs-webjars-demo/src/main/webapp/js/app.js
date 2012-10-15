'use strict';


// Declare app level module which depends on filters, and services
angular.module('webjarsDemo').
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({templateUrl: 'partials/single-view.html', controller: SingleViewCtrl});
  }]);