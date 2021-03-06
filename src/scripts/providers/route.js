(function (module) {
    module.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        console.log('App.config');

        $stateProvider.state('home', {
            url: '/home/:videoId',
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
            url: '/history:videoId',
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

        $urlRouterProvider.otherwise('/home/');

    }]);
}(angular.module('VOD')));