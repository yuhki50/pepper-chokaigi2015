/// <reference path="../../typings/tsd.d.ts"/>
var gulp = require('gulp');
var concat = require('gulp-concat');
//var gulpIf = require('gulp-if');
//var ngAnnotate = require('gulp-ng-annotate');
var ts = require('gulp-typescript');
//var uglify = require('gulp-uglify');

//var srcGlob = ['app/assets/**/*.ts', '!**/*.spec.ts'];
var srcGlob = ['Chokaigi2015/html/js/**/*.ts'];


gulp.task('typescript:compile:js:develop', () => {
    return compile(false);
});

gulp.task('typescript:compile:js:release', () => {
    return compile(true);
});

gulp.task('typescript:watch', ['typescript:compile:js:develop'], () => {
    gulp.watch(srcGlob, ['typescript:compile:js:develop']);
});

function compile(isRelease: boolean) {
    var tsProject = ts.createProject({
        removeComments: true,  // Do not emit comments to output.
        //noImplicitAny: false,  // Warn on expressions and declarations with an implied 'any' type.
        //noLib: false,  // Don't include the default lib (with definitions for - Array, Date etc)
        //noEmitOnError: false,  // Do not emit outputs if any type checking errors were reported.
        //target: "ES3",  // Specify ECMAScript target version: 'ES3' (default), 'ES5' or 'ES6'.
        //module: "",  // Specify module code generation: 'commonjs' or 'amd'
        //sourceRoot: "",  // Specifies the location where debugger should locate TypeScript files instead of source locations.
        declarationFiles: false,  // Generates corresponding .d.ts files.
        noExternalResolve: false,  // Do not resolve files that are not in the input. Explanation below.
        sortOutput: true,  // Sort output files. Usefull if you want to concatenate files (see below).
    });


    var tsResult = gulp.src(srcGlob)
        .pipe(ts(tsProject, { referencedFrom: ['Application.ts'] }));

    return tsResult.js
        .pipe(concat('app.js'))
        //.pipe(ngAnnotate())
        //.pipe(gulpIf(isRelease, uglify()))
        //.pipe(uglify())
        .pipe(gulp.dest('Chokaigi2015/html/js'));
}
