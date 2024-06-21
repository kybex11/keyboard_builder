import createWindow from ".";
import { app, BrowserWindow } from 'electron';

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        const win = createWindow();
        win.setTitle('Builder');
        win.openURL('builder://localhost:3000');
    }
});