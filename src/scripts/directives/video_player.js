(function (module) {
    module.directive('videoPlayer', [
        '$rootScope',
        function ($rootScope) {
            return {
                restrict: 'E',
                templateUrl: 'partials/video_player.html',
                link: function (scope, elem) {
                    var videoElem = elem[0].querySelector('#player');

                    scope.videoEnded = function () {
                        $rootScope.$broadcast('videoEnded');
                    };

                    videoElem.addEventListener('ended', scope.videoEnded);

                }
            }
        }]);
}(angular.module('VOD')));