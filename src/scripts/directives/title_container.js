(function (module) {
    module.directive('titleContainer', ['$window', '$rootScope', function ($window, $rootScope) {
        return {
            restrict: 'E',
            templateUrl: 'partials/title_container.html',
            replace: true,
            scope: {
                entries: '='
            },
            link: function (scope, elm) {
                console.log("TitleContainer Link! %d", scope.entries.length);

                var panelW = 250;
                var panelH = 350;
                var panelSize = 250;
                $rootScope.carouselAxis = 'Y';
                scope.currentShowDeg = 0;
                scope.scrollH = true;


                scope.currentShowIndex = 0;

                $rootScope.getTz = function () {
                    var numberOfPanels = scope.entries.length;
                    return Math.round(( panelSize / 2 ) / Math.tan(Math.PI / numberOfPanels));
                };

                $rootScope.degUnit = function () {
                    var numberOfPanels = scope.entries.length;
                    return 360 / numberOfPanels;
                };

                scope.alterAxis = function () {
                    scope.scrollH = !scope.scrollH;
                    if (!scope.scrollH) {
                        $rootScope.carouselAxis = 'X';
                        panelSize = panelH;
                    } else {
                        $rootScope.carouselAxis = 'Y';
                        panelSize = panelW;
                    }
                    $rootScope.getTz();
                };

                scope.nextClick = function () {
                    $rootScope.$broadcast('updateCurrentTile', --scope.currentShowIndex);
                };

                scope.prevClick = function () {
                    $rootScope.$broadcast('updateCurrentTile', ++scope.currentShowIndex);
                };

                scope.getCarouselStyle = function () {
                    var currentDeg = $rootScope.degUnit() * scope.currentShowIndex;
                    var tz = $rootScope.getTz();
                    var ts = 'translateZ(' + (tz * -1) + 'px) rotate' + $rootScope.carouselAxis + '(' + currentDeg + 'deg)';
                    console.log('ts = ' + ts);
                    return {transform: ts}
                };
            }
        }
    }])
}(angular.module('simpleVod')));