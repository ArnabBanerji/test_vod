(function (module) {
    module.controller('player', ['$scope', 'dataService', '$stateParams', function ($scope, dataService, $stateParams) {

        $scope.videoId = $stateParams.videoId;
        $scope.userId = $stateParams.userId;

        $scope.videoSrc = '';

        dataService.getTitleListData().then(function (data) {
            console.log('Title List Received');
            $scope.titleList = data;
            $scope.videoSrc = $scope.titleList.findByProp('id', $scope.videoId).videoUrl;

        });


        dataService.getUserData().then(function (data) {
            console.log('User Data Received');
            $scope.userData = data;
        });
    }]);
}(angular.module('VOD')));