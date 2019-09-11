import {BrowserWindow} from 'electron';
import {format as formatUrl} from 'url';
import * as path from 'path';

const isDevelopment = process.env.NODE_ENV !== "production";

export default ()=>{
    let win = new BrowserWindow({
        width:1366,
        height:768,
        resizable:false,
        show:false,
        webPreferences: {
            nodeIntegration: false,
            preload: path.join(__dirname, "./preload/modules.js"),
            defaultFontFamily:{
                standard:"Microsoft YaHei"
            },
            defaultEncoding:"UTF-8"
        },
    });

    if(isDevelopment){
        win.loadURL("http://127.0.0.1:8000");
    }else {
        win.loadURL(
            formatUrl({
                pathname:path.join(__dirname,"./index.html"),
                protocol:"file:",
                slashes:true
            })
        )
    }

    win.webContents.on('did-finish-load',()=>{
        win.show();
        win.center();
        win.openDevTools();
    });

    win.on('closed',()=>{
        win = null;
    });

    return win;
}
