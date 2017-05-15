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

                    scope.getWrapperStyle = function () {
                        var count = scope.titleList.length;
                        var unitW = 250;
                        var unitH = 350;

                        return {
                            height: unitH,
                            width: (unitW * count) + 'px'
                        }
                    };

                    scope.inFocus = function (idx) {
                        console.log('InFocus %d', idx);
                    };

                    scope.isWatched = function (id) {
                        return dataService.isWatched(id);
                    };

                    scope.titleClicked = function (index) {
                        var titleElem = scope.titleList[index];
                        $state.go('player', {
                            userId: dataService.userId,
                            videoId: titleElem.id
                        });
                    };

                    scope.titlePlayClicked = function () {

                    };


                }
            }


        }]);
}(angular.module('VOD')));