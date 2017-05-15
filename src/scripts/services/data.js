(function (module) {
    function dataService(TitleFactory, $http, $q) {
        console.log('DataService init');
        var self = this;
        var titleDataListUrl = 'https://demo2697834.mockable.io/movies';
        var userDataUrl = 'https://4pa8myas7e.execute-api.us-east-1.amazonaws.com/prod/user';

        var userId = 'a0';
        this.titleData = false;
        this.userId = userId;
        this.userData = {
            userId: userId,
            watched: []
        };

        this._markWatched = function (id) {
            if (self.userData.watched.indexOf(id) === -1) {
                self.userData.watched.push(id);
                $http.post(userDataUrl, {'userId': userId, watched: id});
            }
        };

        this._isWatched = function (id) {
            return (self.userData.watched.indexOf(id) !== -1);
        };


        this._getTitleListData = function () {
            var deferred = $q.defer();
            $http.get(titleDataListUrl).then(function (data) {
                self.titleData = data.data.entries.map(TitleFactory.getTitleObj);
                deferred.resolve(self.titleData);
            }, function () {
                deferred.reject('Title list data failed to load.');
            });
            return deferred.promise;
        };

        this._getUserData = function () {
            var deferred = $q.defer();
            $http.get(userDataUrl).then(function (data) {
                self.userData = data.data;
                deferred.resolve(self.userData);
            }, function () {
                deferred.reject('User data failed to load.');
            });
            return deferred.promise;
        };

        return {
            userId: userId,
            markWatched: this._markWatched,
            isWatched: this._isWatched,
            getTitleListData: this._getTitleListData,
            getUserData: this._getUserData
        }

    }


    // module.service('dataService', [
    //     'TitleFactory',
    //     '$http',
    //     '$q',
    //     dataService
    // ]);

    module.provider('dataService', function () {

        this.$get = [
            'TitleFactory',
            '$http',
            '$q',
            dataService
        ];
    });


}(angular.module('VOD')));