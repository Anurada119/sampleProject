var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify')

var env = process.env.NODE_ENV || 'development'

gulp.task('jade', function() {
    return gulp.src('src/templates/**/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('builds/developments'));
})

gulp.task('sass', function() {
    var config = {}

    if (env === 'develpment') {
        sourseComments = 'map';
    }

    if (env === 'production') {
        outputStyle = 'compressed';
    }

    return gulp.src('src/sass/main.sass')
        .pipe(sass())
        .pipe(gulp.dest('builds/developments/css'))
})

gulp.task('scripts', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('builds/developments/js'))
})