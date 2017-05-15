(function (module) {
    module.controller('main', ['$scope', 'userData', 'titleData', function ($scope, userData, titleData) {

        $scope.titleList = titleData;
        $scope.userData = userData;


    }]);
}(angular.module('VOD')));