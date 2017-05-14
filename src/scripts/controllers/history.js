(function (module) {
    module.controller('history', ['$scope', 'TitleFactory', 'dataService', function ($scope, TitleFactory, dataService) {
        console.log('history Controller');

        $scope.titleListFull = [];
        $scope.titleList = [];


        $scope.userData = {'watched': []};

        $scope.$on('titleDataReceived', function (ev, data) {
            $scope.titleListFull = data.entries.map(TitleFactory.getTitleObj);
            for (var i = 0; i < $scope.titleListFull.length; i++) {
                var obj = $scope.titleListFull[i];
                if (dataService.isWatched(obj.id)) {
                    $scope.titleList.push(obj);
                }
            }

        });

        $scope.$on('userDataReceived', function (ev, data) {
            $scope.userData = data;
        });
    }]);
}(angular.module('VOD')));