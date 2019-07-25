module.exports = function () {
    $.gulp.task('copy', function(){
        return $.gulp.src([
            'fonts/**/*.{woff,woff2}',
            'img/**',
            'data/**',
            '*.html'
        ], {
            base: '.'
        })

        .pipe($.gulp.dest('build'))
    });
};