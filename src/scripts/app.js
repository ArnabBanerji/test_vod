var app = angular.module('simpleVod', ['ui.router']);


(function () {
    angular.module('simpleVod')
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $stateProvider.state('root', {
                url: '/',
                templateUrl: 'partials/home.html',
                controller: 'mainCtrl'
            });
            $urlRouterProvider.otherwise('/');
        }]);
})();