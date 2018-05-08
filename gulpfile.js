const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-ruby-sass');
const rename = require('gulp-rename');
const clean = require('gulp-clean');
const ignore = require('gulp-ignore');
const runSequence = require('run-sequence');

gulp.task('clean', () =>
  gulp.src('', {read: false })
		.pipe(ignore('node_modules/**'))
  	.pipe(clean({force: true}))
);

gulp.task('buildcss', () =>{
  gulp.src('../source/sass/*.scss')
	  return sass('../source/sass/*.scss').on('error', sass.logError)
		.pipe(cssmin())
		.pipe(rename('styles.min.css'))
		.pipe(gulp.dest(''))
});

gulp.task('htmlmin', () =>
  gulp.src('../source/*.html')
	  .pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest(''))
);

gulp.task('copyImages', () =>
  gulp.src('../source/img/*')
	  .pipe(gulp.dest('img'))
);

gulp.task('build', () =>
  runSequence(
		'buildcss',
		'htmlmin',
		'copyImages'
	)
);

gulp.task('watch', () => {
	gulp.watch('../source/sass/**', ['buildcss']);
	gulp.watch('../source/*.html', ['htmlmin']);
	gulp.watch('../source/img/*', ['copyImages'])
});

gulp.task('default', ['build', 'watch']);
