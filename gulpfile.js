//モジュール
const gulp = require('gulp')
const sass = require('gulp-sass')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const browserSync = require('browser-sync');

//開発ディレクトリ
const devDir = 'src/'

const dev = {
  'scss': devDir + 'assets/scss/**/*.scss'
}

// const dev2 = {
//   'css_expanded': devDir + 'assets/css_expanded/'
// }

//開発用ディレクトリ
const srcDir = 'src/'

//リリース用ディレクトリ
const destDir = './common/'
const dest = {
  'css': destDir + 'css'
}

gulp.task('bs-reload', function () {
  browserSync.reload();
});

// Static server
gulp.task('browser-sync', () => {
  browserSync({
      server: {
          baseDir: "./"
      },
      startPath: '/lounge/index.html',
  });
});

gulp.task('html', function () {
  gulp.src('./*.html')
    browserSync.reload();
});

gulp.task('js', function () {
  gulp.src('./*.js')
    browserSync.reload();
});

//scss
gulp.task('sass', () => {
  gulp.src(dev.scss)
    .pipe(sourcemaps.init()) //map生成
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(sass({
        outputStyle: 'expanded',
        indentWidth: 1
      })
    )
    // .pipe(sourcemaps.write('../map')) //一個上の階層にmap追加
    .pipe(gulp.dest(dest.css))
    .pipe(browserSync.reload())
})

gulp.task('watch', () => {
  gulp.watch(['src/assets/scss/**/*.scss'], ['sass', 'bs-reload']);
  gulp.watch(['**/*.html'], ['html', 'bs-reload']);
  gulp.watch(['js/**/*.js'], ['js', 'bs-reload']);
});

gulp.task('minify-css', () => {
  return gulp.src('./src/assets/css_expanded/*.css')
    .pipe(cleanCSS({ }))
    .pipe(gulp.dest('./www/assets/css/'));
});


gulp.task('default', ['watch', 'browser-sync'] , () => {
  // gulp.watch(['src/assets/scss/**/*.scss'], ['sass']);
  // gulp.watch(['**/*.html'], ['html']);
  // gulp.watch(['**/*.js'], ['js']);
});