var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload

var env = process.env.NODE_ENV || 'development'

gulp.task('jade', function() {
    return gulp.src('src/templates/**/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('builds/developments'))
        .pipe(reload({ stream: true }));
});

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
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('builds/developments/css'))
        .pipe(reload({ stream: true }));
});

gulp.task('scripts', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('builds/developments/js'))
        .pipe(reload({ stream: true }));
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: 'builds/developments'
        }
    });
});

gulp.task('watch', function() {
    gulp.watch('src/templates/**/*.jade', ['jade'])
    gulp.watch('src/js/**/*.js', ['scripts'])
    gulp.watch('src/sass/**/*.sass', ['sass']);
});

gulp.task('default', ['jade', 'sass', 'scripts', 'browserSync', 'watch']);