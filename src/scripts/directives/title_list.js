(function (module) {

    module.directive('titleList', [
        '$rootScope',
        '$stateParams',
        'TitleFactory',
        'dataService',
        '$http',
        '$state',
        function ($rootScope, $stateParams, TitleFactory, dataService, $http, $state) {
            console.log('titleList directive');
            return {
                restrict: 'E',
                templateUrl: 'partials/title_list.html',
                replace: true,
                link: function (scope) {

                    scope.currentViewOffset = 0;
                    scope.currentViewCount = 3;

                    scope.updateViewCount = function () {
                        scope.currentViewCount = Math.floor(($rootScope.windowW - 110) / 210);
                        scope.currentViewCount = (scope.currentViewCount > 0) ? scope.currentViewCount : 1;

                        if (!scope.$$phase) {
                            scope.$apply();
                        }
                    };
                    scope.$on('windowResize', scope.updateViewCount);


                    scope.getStartIndex = function () {
                        return (scope.currentViewOffset * scope.currentViewCount);
                    };

                    scope.getEndIndex = function () {
                        return scope.getStartIndex() + scope.currentViewCount;
                    };

                    scope.showItem = function (index) {
                        return (index >= scope.getStartIndex() && index < scope.getEndIndex());
                    };

                    scope.getTitleList = function () {
                        return scope.titleList;
                    };

                    scope.getTitleListCount = function () {
                        return scope.titleList.length;
                    };

                    scope.showNext = function () {
                        scope.currentViewOffset += 1;
                    };

                    scope.showPrev = function () {
                        scope.currentViewOffset -= 1;
                    };

                    scope.isWatched = function (id) {
                        return dataService.isWatched(id);
                    };

                    scope.titleClicked = function (index) {
                        var titleElem = scope.titleList[index];
                        $state.go('home', {
                            videoId: titleElem.id
                        });
                    };

                    scope.updateViewCount();
                }
            }


        }]);
}(angular.module('VOD')));