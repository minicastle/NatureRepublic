const {app,BrowserWindow} = require("electron");
const url = require("url");

function CreateWindow(){
    const win = new BrowserWindow({
        width:800,
        height:800
    });
    const starturl = process.env.ELECTRON_START_URL || url.format({
        process:"file",
        slashes:true,
        pathname:__dirname+"./../build/index.html"
    });
    win.loadURL(starturl);
};
app.on("ready",function(){
    CreateWindow();
});
app.on("window-all-closed",function(){
    app.quit();
});