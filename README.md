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
7.git的远程仓库
    
    git remote           查看远程仓库
    git remote -v        查看远程仓库
    git remote add <shortname> <url>       添加远程仓库
    git fetch pb         这个命令会访问远程仓库，从中拉取所有你还没有的数据。
    git pull             通常会从最初克隆的服务器上抓取数据并自动尝试合并到当前所在的分支。
    git push [remote-name] [branch-name]   把分支推送到远程仓库上
    git remote show [remote-name]          查看远程仓库
    git remote rename pb paul              把仓库pb更名为paul
    git remote rm paul                     把远程仓库移除掉

8.常用的git命令

    git init             在目录知更鸟初始化仓库
    git clone [url]      将项目下载到本地
    git status           显示文件变更
    git add .            添加
    git commit -m ‘’     注释
    git push             将本地分支的更新，推送到远程主机。
9.git pull
    
    git pull origin next:master     要取回origin主机的next分支，与本地的master分支合并
    git pull origin next            如果远程分支(next)要与当前分支合并，则冒号后面的部分可以省略
