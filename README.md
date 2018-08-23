# gulp
1.开始安装Gulp

    npm install -g gulp
  
2.切换到你的在项目根文件夹下，运行

    npm install gulp --save-dev
  
3.安装gulp功能插件依赖包

    npm install gulp-sass gulp-less gulp-cssmin gulp-concat gulp-connect gulp-imagemin gulp-uglify gulp-rename open --save-dev
    npm install jshint gulp-jshint --save-dev
4.关键文件

    gulpfile.js
    
5.回到命令行窗口，可以直接运行gulp任务了。

    gulp  ----------------- 打包所有的 js/scss/imgag/html
    gulp scss ------------- 单独执行 scss任务
6.常用的gulp插件参考

    gulp-imagemin:        压缩图片
    gulp-cssmin:          压缩css
    gulp-uglify:          压缩js
    gulp-jshint:          检查js
    gulp-ruby-sass:       支持sass，安装此版本需要安装ruby
    gulp-concat:          合并文件
    gulp-rename:          重命名文件
    gulp-htmlmin:         压缩html
    gulp-clean:           清空文件夹
    gulp-livereload:      服务器控制客户端同步刷新（需配合chrome插件LiveReload及tiny-lr）
    gulp-connect:         用于运行网络服务器的Gulp插件
