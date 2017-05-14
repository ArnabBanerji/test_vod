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
                link: function (scope) {

                    scope.isWatched = function (id) {
                        return dataService.isWatched(id);
                    };

                    scope.markWatched = function (id) {
                        dataService.markWatched(id)
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