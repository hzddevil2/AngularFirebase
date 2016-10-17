var gulp = require('gulp'),  //main gulp
    server = require('gulp-server-livereload'),  //gulp server and livereload
    sass = require('gulp-sass'),    //gulp sass compile
    useref = require('gulp-useref'),    //gulp css and js build for deploy
    uglify = require('gulp-uglify'),
    gulpif = require('gulp-if'),
    minifyCss = require('gulp-csso'),
    useref = require('gulp-useref'),    //gulp css and js build for deploy
    prefix = require('gulp-autoprefixer');  //gulp css old browsers prefixes

//server
gulp.task('start', function() {
    gulp.src('app')
        .pipe(server({
            livereload: true,
            open: true
        }));
});

//styles compiler
gulp.task('style', function(){
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix({
            browsers: ['last 15 versions']
        }))
        .pipe(gulp.dest('app/css'));
});

//styles live changer
gulp.task('watch', function(){
    gulp.watch('app/sass/**/*.sass', ['style']);
});

//default gulp task, run "cmd gulp"
gulp.task('default', ['start', 'watch']);

//build deploy gulp task
gulp.task('build', function() {
    return gulp.src('app/**/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('public'));
});