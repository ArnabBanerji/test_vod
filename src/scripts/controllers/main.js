(function (module) {
    module.controller('main', ['$scope', 'TitleFactory', 'dataService', function ($scope, TitleFactory, dataService) {

        $scope.titleList = [];
        $scope.userData = {'watched': []};


        dataService.getTitleListData().then(function (data) {
            console.log('Title List Received');
            $scope.titleList = data;
        });

        dataService.getUserData().then(function (data) {
            console.log('User Data Received');
            $scope.userData = data;
        });

    }]);
}(angular.module('VOD')));