"use strict";

const gulp        = require('gulp');
const del         = require('del');
const runSequence = require('run-sequence');

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

// default build task
gulp.task('build', (cb) => {
  return runSequence('clean', 'export-node-modules', cb);
});
