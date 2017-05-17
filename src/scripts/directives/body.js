(function (module) {

    module.directive('body', ['$rootScope', '$window', function ($rootScope, $window) {
        return {
            restrict: 'E',
            link: function () {

                function resizeHandler() {
                    $rootScope.windowW = $window.innerWidth;
                    $rootScope.windowH = $window.innerHeight;
                    $rootScope.$broadcast('windowResize');
                    if (!$rootScope.$$phase) {
                        $rootScope.$apply();
                    }
                }

                angular.element($window).bind('resize', resizeHandler);
                resizeHandler();


            }
        }


    }]);

}(angular.module('VOD')));