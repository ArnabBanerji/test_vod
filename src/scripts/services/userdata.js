(function (module) {
    function userDataService($http) {
        var url = 'https://demo2697834.mockable.io/movies';
        var userId = 'a0';

        this.getMoviesData = function (callBack) {
            return $http.get(url);
        }
    }

    module.service('userDataService', [
        '$http',
        userDataService
    ]);
}(angular.module('simpleVod')));
