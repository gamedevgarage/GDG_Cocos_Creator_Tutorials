const greenworks = require('./greenworks/greenworks');
const { app, BrowserWindow } = require('electron')

app.on('window-all-closed', function () {
    if (process.platform != 'darwin')
        app.quit();
});

app.on('ready', function () {

    let relaunch = greenworks.restartAppIfNecessary(1854360);

    if (relaunch) {
        app.quit();
    }
    else {
        if (greenworks.init()) {
            console.log('Steam inited successfully');

            mainWindow = new BrowserWindow({
                width: 1280,
                height: 720,
                show: true,
                fullscreen: true,
                resizable: true,
                frame: true,
                title: "Your Game!"
            });
            mainWindow.loadURL('file://' + __dirname + '/game/index.html').then(() => { });
            mainWindow.removeMenu();
            mainWindow.on('closed', function () { mainWindow = null; });

        }
        else {
            app.quit();
        }
    }

});
