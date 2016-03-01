var gulp = require('gulp'),
uglify = require('gulp-uglify'),
sass = require('gulp-ruby-sass');


// gulp.task('default', function(){
	// gulp.src('js/*.js')
	// .pipe(uglify())
	// .pipe(gulp.dest('minjs'))
// })

gulp.task('scripts', function(){
	gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('minjs'))	
});

gulp.task('styles', function() {
	return sass('public/scss/*.scss', {
		style: 'compressed'
	})
	.pipe(gulp.dest('public/css'));
});

gulp.task('watch', function(){
	gulp.watch('', [])
})

gulp.task('default', ['styles'])