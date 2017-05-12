(function (module) {
    module.directive('videoPlayer', ['$rootScope', function ($rootScope) {
        return {
            restrict: 'E',
            templateUrl: 'partials/video_player.html',
            replace: true,
            link: function (scope, elem) {
                var videoElem = elem.find('#video')[0];

                scope.videoSrc = '';
                scope.$on('playVideo', function (ev, videoData) {
                    console.log('playVideo received');
                    scope.videoSrc = videoData.videoUrl;
                });
            }
        }
    }
    ])
}(angular.module('simpleVod')));