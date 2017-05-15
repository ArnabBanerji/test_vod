(function (module) {
    module.controller('history', ['$scope', 'userData', 'titleData', function ($scope, userData, titleData) {
        console.log('history Controller');
        $scope.titleList = [];

        $scope.userData = userData;

        for (var i = 0; i < titleData.length; i++) {
            var obj = titleData[i];
            if ($scope.userData.watched.indexOf(obj.id) !== -1) {
                $scope.titleList.push(obj);
            }
        }
    }]);
}(angular.module('VOD')));