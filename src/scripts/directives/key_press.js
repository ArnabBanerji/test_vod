(function (module) {

    module.directive('keyPress', ['$rootScope', function ($rootScope) {
        return {
            restrict: 'A',
            link: function (scope, elem) {
                var elem = elem[0];

                elem.addEventListener('keydown', function (ev) {
                    console.log('On Key Down!');
                    console.log(ev.keyCode);
                    console.log(ev);
                })
            }
        }


    }]);

}(angular.module('VOD')));