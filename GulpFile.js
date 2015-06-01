/**
 *
 * Alias JS
 *
 * Author -> Ajay Singh (CoderAjay)
 * meajaysingh@hotmail.com
 * (c) 2014-2015 All Rights Reserves
 *
 */

/*
  All variables and requires placed here
 */
var gulp = require('gulp'),
    webserver = require('./core');



/*
All gulp tasks Placed here
 */
gulp.task('default', ['install']);
gulp.task('install', installationProcess);


/*
 Funcational Programmming placed here
 */
function installationProcess() {
    webserver.start();
}
