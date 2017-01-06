var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var order = require('gulp-order');
var connect = require('gulp-connect');

var paths = {
  sass: ['./scss/**/*.scss'],
  js: ['./js/*.js']
};

gulp.task('default', ['webserver', 'watch']);

gulp.task('styles', function(done) {
  gulp.src('./scss/*')
  .pipe(order([
      "bootstrap.scss",
      "app.scss"
  ]))
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(concat("app.min.css"))
    .pipe(gulp.dest('./css/'))
    .pipe(connect.reload())
    .on('end', done);
});


// Combine, minify, and clean JS files -- orders js files
gulp.task('scripts', function() {  
    gulp
  .src("./js/*.js")
  .pipe(order([
      "jquery.js",
      "fastclick.js",
      "console.js",
      "app.js"
  ]))
  .pipe(stripDebug())
  .pipe(uglify())
  .pipe(concat("app.min.js"))
  .pipe(gulp.dest("./js/min/"))
  .pipe(connect.reload());
});


gulp.task('webserver', function() {
  connect.server({
      livereload: true
  });
});

// Watch SCSS and JS
gulp.task('watch', function() {
    gulp.watch(paths.sass, ['styles']);
    gulp.watch(paths.js, ['scripts']);
});


