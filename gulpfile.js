var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('default', function () { 
    console.log('Hello Gulp!') 
    gulp.watch( "./assets/scss/**/*.scss", ["styles"] );
});

gulp.task('watch', function () { 
    /** Watch any changes */
    gulp.watch( "./assets/scss/**/*.scss", ["styles"] );
    gulp.watch( "./assets/scripts/**/*.js", ["scripts"] );
});

//style paths
var sassFiles = './assets/scss/**/*.scss',
cssDest = './public/css/';

gulp.task('styles', function(){
gulp.src(sassFiles)
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest(cssDest));
});

//script paths
var jsFiles = './assets/scripts/**/*.js',
jsDest = './public/javascript';

gulp.task('scripts', function() {
  return gulp.src(jsFiles)
    .pipe(babel({
      presets: [
          ['es2015', {modules: false}],
      ],
      plugins: [
          ['transform-es2015-modules-commonjs', {strictMode: false}],
      ]
    }))
    .pipe(concat('app.js'))
    .pipe(gulp.dest(jsDest))
    .pipe(rename('app.min.js'))
    .pipe(uglify().on('error', function(e){
            console.log(e);
         }))
    .pipe(gulp.dest(jsDest));
});