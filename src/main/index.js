import {app,BrowserWindow} from 'electron';
import createWindow from "./libs/createWindow";

app.on('ready',()=>{
    const win = createWindow();
});

app.on("window-all-closed",()=>{
    app.quit();
});



