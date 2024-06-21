const { BrowserWindow } = require('electron');

export default function createWindow() {
    const win = new BrowserWindow({
        height: 600,
        width: 800,
        minHeight: 600,
        minWidth: 800,
        title: 'Builder',
        autoHideMenuBar: true,
    });

    return win;
}
