var gulp = require('gulp');

var vulcanize = require('gulp-vulcanize');
var htmlmin = require('gulp-html-minifier');
var serve = require('gulp-serve');
var clean = require('gulp-clean');

gulp.task('clean', function () {
    return gulp.src('dist', {read: false, force: true})
        .pipe(clean());
});

gulp.task('serve', serve('dist'));

gulp.task('vulcanize', ['copy'], function () {
    return gulp.src('src/index.html')
        .pipe(vulcanize({
            inlineScripts: true,
            inlineCss: true,
            stripComments: true
        }))
        .pipe(htmlmin({
            collapseWhitespace: true,
            minifyJS: true,
            minifyCSS: true
        }))
        .pipe(gulp.dest('dist'));
});


gulp.task('watch', function () {
    gulp.watch('./src/**/*', ['build']);
});

gulp.task('copy', ['clean'], function () {
    return gulp.src([
            'src/res/**/*',
            'src/browserconfig.xml',
            'src/manifest.json',
            'src/favicon.ico'
        ], {base: 'src'})
        .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['build', 'serve', 'watch']);
gulp.task('build', ['vulcanize']);
