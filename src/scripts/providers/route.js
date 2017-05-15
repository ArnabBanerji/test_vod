(function (module) {
    module.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        console.log('App.config');

        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'partials/main.html',
            controller: 'main',
            resolve: {
                userData: ['dataService', function (dataService) {
                    return dataService.getUserData();
                }],
                titleData: ['dataService', function (dataService) {
                    return dataService.getTitleListData()
                }]
            }
        });

        $stateProvider.state('history', {
            url: '/history',
            templateUrl: 'partials/history.html',
            controller: 'history',
            resolve: {
                userData: ['dataService', function (dataService) {
                    return dataService.getUserData();
                }],
                titleData: ['dataService', function (dataService) {
                    return dataService.getTitleListData()
                }]
            }
        });

        $stateProvider.state('player', {
            url: '/player/:userId/:videoId',
            templateUrl: 'partials/player.html',
            controller: 'player',
            resolve: {
                userData: ['dataService', function (dataService) {
                    return dataService.getUserData();
                }],
                titleData: ['dataService', function (dataService) {
                    return dataService.getTitleListData()
                }]
            }
        });

        $urlRouterProvider.otherwise('/home');

    }]);
}(angular.module('VOD')));