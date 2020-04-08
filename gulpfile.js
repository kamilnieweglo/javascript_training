var gulp = require("gulp");
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Specific Task
function js() {
   
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/jquery/dist/jquery.min.js',  'node_modules/tether/dist/js/tether.min.js'])
    .pipe(gulp.dest("src/js"))
    .pipe(browserSync.stream());
}
gulp.task(js);

// Specific Task
function gulpSass() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
     .pipe(sass())
     .pipe(gulp.dest("src/css"))
     .pipe(browserSync.stream());
}
gulp.task(gulpSass);

gulp.task(serve,['sass'] );

function serve(){
    browserSync.init({
        server: "./src"
    });

     gulp.watch("src/*.html").on('change', browserSync.reload);
     gulp.watch("src/js/*.js").on('change', browserSync.reload);
     gulp.watch('src/scss/*.scss', style);
};


function style() {
    return gulp.src('src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
  };


 
exports.style = style;
// Run multiple tasks
gulp.task('start', gulp.series(js, gulpSass));