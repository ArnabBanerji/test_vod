var src = './src/';
var pkg = src;
var devPage = "dev.html";
var pkgPage = "index.html";
var fs = require('fs');
var gulp = require('gulp');
var concat = require('gulp-concat');
var JSDOM = require('jsdom').JSDOM;
var dom;

var tagsToSearch = [
    {
        appendTo: 'body',
        files: [],
        name: 'script',
        attr: 'src',
        concatFile: 'scripts.js',
        postConcatTask: false
    },
    {
        appendTo: 'head',
        files: [],
        name: 'link',
        attr: 'href',
        concatFile: 'layout.css',
        additionalAttr: {rel: 'stylesheet'},
        postConcatTask: false
    }];

var foldersToCopy = [
    {
        name: 'fonts',
        src: 'public_lib/bootstrap/dist/'
    }
];

JSDOM.fromFile(src + devPage).then(function (d) {
    dom = d;
    getDevFiles();
});

function getDevFiles() {


    for (var i = 0; i < tagsToSearch.length; i++) {
        var tag = tagsToSearch[i];
        var tagName = tag.name;
        var tagFiles = tag.files;
        var tags = dom.window.document.querySelectorAll(tagName);

        for (var j = 0; j < tags.length; j++) {
            var script = tags[j];
            var file = src + script.getAttribute(tag.attr);
            script.outerHTML = '';
            tagFiles.push(file);
            console.log('%s#%d=%s', tagName, j, file);
        }
        var newTag = dom.window.document.createElement(tagName);
        newTag.setAttribute(tag.attr, tag.concatFile);

        if (tag.additionalAttr) {
            for (var k in tag.additionalAttr) {
                newTag.setAttribute(k, tag.additionalAttr[k]);
            }

        }

        var appendTo = dom.window.document.querySelectorAll(tag.appendTo)[0];
        appendTo.appendChild(newTag);

        var stream = gulp.src(tagFiles)
            .pipe(concat(tag.concatFile));

        if (tag.postConcatTask) {
            stream.pipe(tag.postConcatTask()).pipe(gulp.dest(pkg));
        } else {
            stream.pipe(gulp.dest(pkg));
        }

    }

    fs.writeFile(pkg + pkgPage, dom.window.document.documentElement.outerHTML, function (error) {
        if (!error) {
            console.log('Package HTML ready');
        }
    });

    for (var i = 0; i < foldersToCopy.length; i++) {
        var folder = foldersToCopy[i];
        var folderSrcPath = src + folder.src + folder.name + '/**/*';
        var folderDestPath = pkg + folder.name + '/';
        gulp.src([folderSrcPath]).pipe(gulp.dest(folderDestPath));
    }

}

gulp.task('default', function () {
    // place code for your default task here
});