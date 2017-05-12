(function (module) {
    module.controller('mainCtrl', ['$scope', 'TitleFactory', 'userDataService', function ($scope, TitleFactory, userDataService) {


        $scope.dataReady = false;
        userDataService.getMoviesData().then(function (data) {
            console.log('Movie Data received');
            $scope.data = data.data;
            $scope.entries = $scope.data.entries.map(TitleFactory.getTitleObj);
            $scope.dataReady = true;
        }, function () {
            console.fatal('Movies Data could not be retrieved')
        });

    }])
}(angular.module('simpleVod')));