(function (module) {

    module.directive('focusTracker', ['$rootScope', function ($rootScope) {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                var elem = elem[0];
                scope.$watch(attrs.focusTracker, function (value) {
                    console.log('focus tracker :: ', value);
                    if (value === true) {
                        elem.focus();
                    }
                });

            }
        }


    }]);

}(angular.module('VOD')));