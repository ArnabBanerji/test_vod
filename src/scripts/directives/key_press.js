(function (module) {

    module.directive('keyPress', ['$rootScope', function ($rootScope) {
        return {
            restrict: 'A',
            link: function (scope, elem) {
                var elem = elem[0];

                elem.addEventListener('keydown', function (ev) {
                    console.log(ev.keyCode);

                    var keyCode = ev.keyCode;
                    var keyStr = '';

                    switch (keyCode) {
                        case 37:
                            keyStr = 'ArrowLeft';
                            break;
                        case 38:
                            keyStr = 'ArrowUp';
                            break;
                        case 39:
                            keyStr = 'ArrowRight';
                            break;
                        case 40:
                            keyStr = 'ArrowDown';
                            break;
                        case 13:
                            keyStr = 'Enter';
                    }
                    if (keyStr.length > 0) {
                        $rootScope.$broadcast('keyPressed', keyStr);
                    }

                })
            }
        }


    }]);

}(angular.module('VOD')));