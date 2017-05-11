(function (module) {
    module.directive('title', ['$scope', function ($scope) {
        return {
            restrict: 'E',
            template: '<div class="movie-tile"><div class="img-wrapper"><img ng-src="{{entry.coverImage}}" alt="Cover Image"/></div></div>',
            replace: true,
            scope: {
                'titleData': '@'
            }

        }
    }])
}(angular.module('simpleVod')));