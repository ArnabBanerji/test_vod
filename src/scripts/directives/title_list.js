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

                    scope.currentFocusedTitle = -1;

                    scope.getWrapperStyle = function () {
                        var count = scope.titleList.length;
                        var unitW = 210;
                        var unitH = 350;

                        return {
                            height: unitH,
                            width: (unitW * count) + 'px'
                        }
                    };

                    scope.getTitleList = function () {
                        return scope.titleList;
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


                    scope.titleFocus = function (index) {
                        scope.currentFocusedTitle = index;
                        console.log('InFocus %d', index);
                    };
                    scope.titleBlur = function (index) {
                        scope.currentFocusedTitle = -1;
                        console.log('titleBlur %d', index);
                    };


                    scope.$on('keyPressed', function (ev, data) {

                        console.log('Title List key press listener', data);

                        if (scope.currentFocusedTitle === -1) {
                            //No focus on titles yet
                            return;
                        }

                        switch (data) {
                            case 'ArrowLeft':
                                if (scope.currentFocusedTitle > 0) {
                                    scope.currentFocusedTitle--;
                                }
                                break;
                            case 'ArrowUp':
                                break;
                            case 'ArrowRight':
                                if (scope.currentFocusedTitle < scope.titleList.length) {
                                    scope.currentFocusedTitle++;
                                }
                                break;
                            case 'ArrowDown':
                                break;
                            case 'Enter':
                                scope.titleClicked(scope.currentFocusedTitle);
                                break;
                        }
                    });
                }
            }


        }]);
}(angular.module('VOD')));