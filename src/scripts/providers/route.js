(function (module) {
    module.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'partials/main.html',
            controller: 'main'
        });

        $stateProvider.state('history', {
            url: '/history',
            templateUrl: 'partials/history.html',
            controller: 'history'
        });

        $stateProvider.state('player', {
            url: '/player/:userId/:videoId',
            templateUrl: 'partials/player.html',
            controller: 'player'
        });

        $urlRouterProvider.otherwise('/home');

    }]);
}(angular.module('VOD')));