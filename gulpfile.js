var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function () { 
    console.log('Hello Gulp!') 
    gulp.watch( "./assets/scss/**/*.scss", ["styles"] );
});
gulp.task('watch', function () { 
    /** Watch any changes */
    gulp.watch( "./assets/scss/**/*.scss", ["styles"] );
    /** Watch any html changes */
    gulp.watch( "./public/**/*.html", ["html"] );
});

//style paths
var sassFiles = './assets/scss/**/*.scss',
cssDest = './public/css/';

gulp.task('styles', function(){
gulp.src(sassFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
});