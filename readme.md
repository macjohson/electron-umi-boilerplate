#### electron+umi 模板

###### 使用方法

1. 安装umi
`yarn global add umi`

2. 克隆当前项目

3. 进入到项目目录

        yarn
        
        yarn dev #开发模式
        
        yarn release #编译

###### 注意事项

1. 由于React不兼容node环境，默认关闭node注入，需要在react中使用node模块可在`src/main/preload/modules`中定义

        //preload/modules.js
        global.fs = require('fs');
        
        //react中
        const fs = window.fs;

2. 如果遇到跨域问题，请使用node网络请求工具, 如：`axios`；利用preload的方法加载到web环境

3. `[作为一个小提示]`
关于窗口大小调整，由于默认关闭了`resizable`，在Windows上调整窗口大小会出问题，所以请在调整前重设该选项；如果是全屏状态，请先退出全屏

        //react
        const {BrowserWindow} = window.electron.remote;
        const win = BrowserWindow.getAllWindows()[0];
        win.setResizable(true)
        
        win.setSize(1920,1080);
        win.setResizable(false);
        
        
        //退出全屏并重设窗口大小
        const {BrowserWindow} = window.electron.remote;
        const win = BrowserWindow.getAllWindows()[0];
        win.setResizable(true)
        
        if(win.isFullscreen()){
            win.setFullScreen(false)
        }
        
        win.setSize(1920,1080);
        win.setResizable(false);
