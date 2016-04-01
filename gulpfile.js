
var gulp = require('gulp'),
sass = require('gulp-sass'),
browserSync = require('browser-sync'),
nodemon = require('gulp-nodemon'),
reload = browserSync.reload;


gulp.task('sass', function () {
	return gulp.src('public/scss/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('public/css'))
	.pipe(reload({stream:true}));
});

gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init(null, {
        proxy: "http://localhost:1000",
		port: 3000
    });
});

gulp.task('default', ['sass', 'browser-sync'], function () {
	gulp.watch("public/scss/*.scss", ['sass']);
	gulp.watch(['public/*.html'], reload);
});

gulp.task('nodemon', function (cb) {
	var called = false;
	return nodemon({script: 'server.js'}).on('start', function () {
		if (!called) {
			called = true;
			cb();
		}
	});
});