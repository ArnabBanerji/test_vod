(function (module) {
    module.controller('player', ['$scope', 'dataService', '$stateParams', 'dataService', 'titleData', 'userData', function ($scope, dataService, $stateParams, dataService, titleData, userData) {


        $scope.titleList = titleData;
        $scope.userData = userData;
        $scope.videoId = $stateParams.videoId;
        $scope.userId = $stateParams.userId;

        $scope.videoSrc = $scope.titleList.findByProp('id', $scope.videoId).videoUrl;

        $scope.$on('videoEnded', function () {
            dataService.markWatched($scope.videoId);
        });
    }]);
}(angular.module('VOD')));