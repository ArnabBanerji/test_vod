(function (module) {
    module.controller('main', ['$scope', 'userData', 'titleData', '$stateParams', function ($scope, userData, titleData, $stateParams) {

        $scope.videoSrc = '';
        $scope.titleList = titleData;
        $scope.userData = userData;
        $scope.videoId = $stateParams.videoId || '';

        if ($scope.videoId.length > 0) {
            $scope.videoSrc = $scope.titleList.findByProp('id', $scope.videoId).videoUrl;
        }

        $scope.$on('videoEnded', function () {
            dataService.markWatched($scope.videoId);
        });
    }]);
}(angular.module('VOD')));