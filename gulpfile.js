var app = {  // 定义目录
    srcPath:'./src/',
    buildPath:'./build/',
    distPath:'./dist/'
}

// 引入gulp
var gulp = require('gulp');

// 引入组件
var jshint = require('gulp-jshint');//检查js
var sass  = require('gulp-sass');  //编译Sass
var concat = require('gulp-concat');//合并
var connect = require('gulp-connect');//用于运行网络服务器的Gulp插件
var uglify = require('gulp-uglify');//uglify 组件（用于压缩 JS）
var rename = require('gulp-rename');//重命名
var cssmin = require('gulp-cssmin');//压缩css
var imagemin = require('gulp-imagemin');//压缩image

// 引入open
var open = require('open');

//引入openUrl
const openUrl = require('./openUrl');

// 检查js脚本的任务
gulp.task('lint', function() {
    gulp.src(app.srcPath+'js/**/*.js') //可配置你需要检查脚本的具体名字。
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(connect.reload()) //当内容发生改变时， 重新加载。
});

// 移动html
gulp.task('html',function () {
    /*要操作哪些文件 确定源文件地址*/
    gulp.src(app.srcPath+'**/*.html')  /*src下所有目录下的所有.html文件*/
        .pipe(gulp.dest(app.buildPath)) //gulp.dest 要把文件放到指定的目标位置
        .pipe(gulp.dest(app.distPath))
        .pipe(connect.reload()) //当内容发生改变时， 重新加载。
});

// 编译Sass
gulp.task('scss', function() {
    gulp.src(app.srcPath+'sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(app.distPath+'css/'))
        .pipe(cssmin())
        .pipe(gulp.dest(app.buildPath+'css/'))//dest()写入文件
        .pipe(connect.reload()) //当内容发生改变时， 重新加载。
});

// 合并，压缩js文件
// 找到 js/ 目录下的所有 js 文件，压缩，重命名，最后将处理完成的js存放在 dist/js/ 目录下
gulp.task('scripts', function() {
    gulp.src(app.srcPath+'js/**/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest(app.distPath+'js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(app.buildPath+'js'));
//    console.log('gulp task is done');//自定义提醒信息
});

/*压缩图片*/
gulp.task('image',function () {
    gulp.src(app.srcPath+'images/**/*')
        .pipe(gulp.dest(app.distPath+'images'))    
        .pipe(imagemin())
        .pipe(gulp.dest(app.buildPath+'images'))
        .pipe(connect.reload())
});

// .... // 其他任务类似

// 定义默认任务,执行gulp会自动执行的任务
gulp.task('default', function(){
    gulp.run('lint', 'html', 'scss', 'scripts', 'image');
});
// 监听js文件变化，当文件发生变化后会自动执行任务
gulp.watch(app.srcPath+'js/*.js', function(){
    gulp.run('lint','scripts');
});
gulp.task('server',['default'],function () {
    /*设置服务器*/
    connect.server({
        root:[app.srcPath],//要运行哪个目录
        livereload:true,  //是否热更新。
        port:9999  //端口号
    })
    /*监听哪些任务*/
    gulp.watch('bower_components/**/*',['lint']);
    gulp.watch(app.srcPath+'**/*.html',['html']);
    gulp.watch(app.srcPath+'js/**/*.js',['js']);
    gulp.watch(app.srcPath+'images/**/*',['image']);
    gulp.watch(app.srcPath+'sass/**/*.scss',['scss']);

    //通过浏览器把指定的地址打开。
    open('http://localhost:9999');
});