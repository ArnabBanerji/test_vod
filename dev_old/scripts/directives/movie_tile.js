(function (module) {
    module.directive('movieTile', ['$rootScope', function ($rootScope) {
        return {
            restrict: 'E',
            templateUrl: 'partials/movie_tile.html',
            replace: true,
            scope: {
                'entry': '=',
                'index': '='
            },
            link: function (scope) {

                scope.isActive = false;

                scope.$on('updateCurrentTile', function (ev, d) {


                    scope.isActive = (d === scope.index);
                    console.log('updateCurrentTile', scope.isActive, d, scope.index);
                });

                scope.getStyle = function () {
                    var idx = scope.index;
                    var tz = $rootScope.getTz();
                    var degUnit = $rootScope.degUnit();
                    var ts = "rotate" + $rootScope.carouselAxis + "(" + (degUnit * idx) + 'deg) translateZ(' + tz + 'px)';
                    return {transform: ts}
                };

            }
        }
    }
    ])
}(angular.module('simpleVod')));