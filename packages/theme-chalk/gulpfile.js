'use strict';

/**
 * series: 将任务函数/组合操作组合成更大的操作，这些操作将按顺序依次执行，类似Promise.all
 * src: 创建一个流，用于从文件系统读取Vinyl对象
 * dest：创建一个用于将Vinyl对象写入到文件系统的流
 * pipe：管道的意思，承上启下的作用，将上一步操作流向下一步
 */
const { series, src, dest } = require('gulp')
// const sass = require('gulp-sass')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')
// src 创建一个流，用于从文件系统读取Vinyl对象
function compile() {
  return src('./src/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(dest('./lib'))
}

exports.build = series(compile)
