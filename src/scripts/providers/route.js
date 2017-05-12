(function (module) {
    module.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider.state('titleList', {
            url: '/titleList',
            templateUrl: 'partials/title_list.html',
            controller: 'titleList'
        });


        $urlRouterProvider.otherwise('/titleList');

    }]);
}(angular.module('VOD')));