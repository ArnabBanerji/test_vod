(function (module) {
    function dataService($http, $log) {

        console.log('dataService run');
        var self = this;

        var url = 'https://demo2697834.mockable.io/movies';
        var userId = 'a0';

        this.data = [];


        var req = $http.get(url);

        req.then(function (data) {
            $log.info('Data Received');
            self.data = data.data;
        }, function () {
            $log.error('Failed to load data.', 'dataService');
            throw new Error();
        });

        this.getDataPromise = function () {
            return req;
        };

        this.getMoviesData = function () {
            return this.data;
        }
    }

    module.service('dataService', [
        '$http',
        '$log',
        dataService
    ]);
}(angular.module('VOD')));
