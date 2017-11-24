//include dependecies
var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');

gulp.task('sass', function(){
	gulp.src('./src/sass/*.scss')
	    .pipe(plumber())
	    .pipe(sass())
	    .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function(){
 	gulp.watch('./src/sass/**/*.scss', {
 		readDelay : 20
 	}, 
 	['sass']);
});
