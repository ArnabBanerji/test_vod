(function (module) {
    module.controller('history', ['$scope', 'TitleFactory', 'dataService', function ($scope, TitleFactory, dataService) {
        console.log('history Controller');

        $scope.titleList = [];
        $scope.userData = [];


        dataService.getUserData().then(function (data) {
            console.log('User Data Received');
            $scope.userData = data;
            dataService.getTitleListData().then(function (data) {
                console.log('Title Data Received');
                var titleList = data;
                for (var i = 0; i < titleList.length; i++) {
                    var obj = titleList[i];
                    if ($scope.userData.watched.indexOf(obj.id) !== -1) {
                        $scope.titleList.push(obj);
                    }
                }


            });
        });

    }]);
}(angular.module('VOD')));