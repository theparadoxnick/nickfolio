// Gulp the task runner
const gulp = require( 'gulp' );
// Compilador de Stylus do Gulp
const stylus = require('gulp-stylus');
// Agrupador de media queries
const gcmq = require('gulp-group-css-media-queries');
// Autoprefixer
const autoprefixer = require('gulp-autoprefixer');
// CSS Minify
const cleanCSS = require('gulp-clean-css');
// Diretórios dos arquivos do projeto
const dir_css = './styl/**/*.styl',
      dir_css_rulled = ['./styl/*.styl','!./styl/_*.styl'],
      prod_css =  './assets/css/';

// Função para compilar CSS
function compile(){
  return(
    gulp.src( dir_css_rulled  )
    .pipe( stylus({linenos: true}) )
    .pipe( gcmq() )
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
    .pipe( gulp.dest( prod_css ) )
  )
}

exports.compile = compile;

// Função que compile e minifica o CSS
function minify(){
  return(
    gulp.src( dir_css_rulled )
      .pipe( stylus({compress: true}) )
      .pipe( gcmq() )
      .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
        }))
      .pipe(cleanCSS())
      .pipe( gulp.dest( prod_css ) )
  )
};

exports.minify = minify;

// Função watch
function watch(){
  return(
    gulp.watch( dir_css , compile ).on('change', function(path, stats) {
      console.log('\x1b[32mO Arquivo \x1b[37m' + path + ' \x1b[32mfoi modificado');
    })
  )
};

exports.watch = watch