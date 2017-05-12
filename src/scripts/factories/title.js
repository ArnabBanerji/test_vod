Array.prototype.findByProp = function (key, val) {
    for (var i = 0; i < this.length; i++) {
        var el = this[i];
        if (el[key] === val) {
            return el;
        }
    }
};

(function (module) {
    module.factory('TitleFactory', [function () {

        function Title(titleData) {
            this.title = titleData.title;
            this.description = titleData.description;
            this.type = titleData.type;
            this.publishedDate = titleData.publishedDate;
            this.availableDate = titleData.availableDate;
            this.id = titleData.id;
            this.language = titleData.metadata.findByProp('name', 'language').value;
            this.coverImage = titleData.images.findByProp('type', 'cover').url;
            this.videoUrl = titleData.contents[0].url;
            this.cateogies = titleData.categories.map(function (cat) {
                return cat.title
            });
        }

        return {
            getTitleObj: function (data) {
                return new Title(data);
            }
        };
    }]);
}(angular.module('VOD')));