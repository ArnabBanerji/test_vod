(function (module) {
    module.directive('videoPlayer', [
        '$rootScope',
        function ($rootScope) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'partials/video_player.html',
                link: function (scope, elem) {
                    var videoElem = elem[0].querySelector('#player');
                    var pbMargins = 50;
                    videoElem.load();
                    scope.showVideoWrapper = true;
                    scope.videoPlaying = false;
                    scope.showToolTip = false;
                    scope.toolTipPos = 0;

                    scope.playPauseClicked = function () {
                        if (scope.videoPlaying) {
                            videoElem.pause();
                        } else {
                            videoElem.play();
                        }
                    };

                    scope.videoClosed = function () {
                        videoElem.pause();
                        videoElem.src = '';
                        elem.hide();
                    };

                    scope.videoEnded = function () {
                        console.log('VideoPlayer :: videoEnded');
                        $rootScope.$broadcast('videoEnded');
                    };
                    scope.playStarted = function () {
                        scope.videoPlaying = true;
                        console.log('VideoPlayer :: playStarted');
                        $rootScope.$broadcast('playStarted');
                        if (!scope.$$phase) {
                            scope.$apply();
                        }
                    };

                    scope.goFullScreen = function () {

                    };

                    scope.getPbW = function () {
                        return ($rootScope.windowW - (pbMargins * 2));
                    };

                    scope.getPbStyle = function () {
                        return {
                            width: scope.getPbW() + 'px',
                            left: pbMargins + 'px'
                        }
                    };

                    scope.getTargetTime = function (ev) {
                        var pbPos = ev.screenX - pbMargins;
                        scope.showToolTip = true;
                        scope.toolTipPos = pbPos - 25;
                        return Math.floor(pbPos * videoElem.duration / scope.getPbW());
                    };

                    scope.pbClick = function (ev) {
                        videoElem.currentTime = scope.getTargetTime(ev);
                    };


                    scope.getTimeString = function (targetTime) {

                        var mins = '' + Math.floor(targetTime / 60);
                        var secs = '' + targetTime % 60;

                        if (mins.length === 1) {
                            mins = '0' + mins;
                        }
                        if (mins.length === 0) {
                            mins = '00';
                        }
                        if (secs.length === 1) {
                            secs = '0' + secs;
                        }
                        if (secs.length === 0) {
                            secs = '00';
                        }
                        return mins + ':' + secs;
                    };

                    scope.pbMouseMove = function (ev) {
                        scope.pbVal = scope.getTimeString(scope.getTargetTime(ev));
                    };

                    scope.pbMouseOut = function () {
                        scope.showToolTip = false;
                    };

                    scope.playPaused = function () {
                        scope.videoPlaying = false;
                        $rootScope.$broadcast('playPaused');
                        if (!scope.$$phase) {
                            scope.$apply();
                        }
                    };

                    scope.timeUpdate = function () {
                        scope.videoTime = scope.getTimeString(Math.floor(videoElem.currentTime));
                        if (!scope.$$phase) {
                            scope.$apply();
                        }
                    };

                    scope.$on('windowResize', function () {
                        scope.pbStyle = scope.getPbStyle();
                    });

                    scope.pbStyle = scope.getPbStyle();

                    videoElem.addEventListener('ended', scope.videoEnded);
                    videoElem.addEventListener('play', scope.playStarted);
                    videoElem.addEventListener('pause', scope.playPaused);
                    videoElem.addEventListener('timeupdate', scope.timeUpdate);

                }
            }
        }]);
}(angular.module('VOD')));