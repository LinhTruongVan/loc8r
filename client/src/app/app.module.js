(function() {
    'use strict';

    angular.module('loc8r', [
        'ngRoute', 'ngAnimate'
    ])
    .config([
        '$locationProvider',
        '$routeProvider',
        function($locationProvider, $routeProvider) {
            $routeProvider
                .when('/locations', {
                    templateUrl: 'app/locationList/location-list.html',
                    controller: 'locationListCtrl',
                    controllerAs: 'vm'
                })
                .when('/locations/:locationId', {
                    templateUrl: 'app/locationDetail/location-detail.html',
                    controller: 'locationDetailCtrl',
                    controllerAs: 'vm'
                })
                .otherwise({
                    redirectTo: '/locations'
                });
        }
    ]);

})();
