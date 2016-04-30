"use strict";

const gulp        = require('gulp');
const del         = require('del');
const runSequence = require('run-sequence');
const browserify  = require('browserify');
const watchify    = require('watchify');
const babelify    = require('babelify');
const source      = require('vinyl-source-stream');
const glob        = require('glob');

// clean build files
gulp.task('clean', () => {
  del('./public/*');
});

// export node_modules files
gulp.task('export-node-modules', () => {
  const exportModules = [
  ];

  for(let exportModule of exportModules) {
    gulp.src(`node_modules/${exportModule}/**/*`)
      .pipe(gulp.dest('app/node_modules'));
  }
});

// compile es2015
gulp.task('es2015', () => {
  const scripts = glob.sync('./src/*.js');

  browserify({
    debug     : true,
    entries   : scripts,
    extensions: ['.js']
  })
    .transform(babelify, {
      presets: ['es2015', 'react'],
      plugins: ['transform-react-display-name']
    })
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public/js'));
});

// default build task
gulp.task('build', (cb) => {
  return runSequence('clean', 'export-node-modules', 'es2015', cb);
});
