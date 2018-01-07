const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', () => { 
  gulp.watch( "./assets/scss/**/*.scss", ["styles"] );
});

gulp.task('watch', () => { 
  gulp.watch( "./assets/scss/**/*.scss", ["styles"] );
  gulp.watch( "./assets/scripts/**/*.js", ["scripts"] );
});

const sassFiles = './assets/scss/**/*.scss',
cssDest = './public/css/';

gulp.task('styles', () => {
  gulp.src(sassFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(cssDest));
});

const jsFiles = './assets/scripts/**/*.js',
jsDest = './public/javascript';

gulp.task('scripts', () => {
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
    .pipe(uglify().on('error', function(err){
      console.log(err);
    }))
    .pipe(gulp.dest(jsDest));
});