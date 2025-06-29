const { app, BrowserWindow, Menu } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    maxWidth: 425,
    height: 600,
    menu: null, 
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false 
    }
  });

  win.loadFile('index.html');
};

app.whenReady().then(() => {
  createWindow();
  Menu.setApplicationMenu(null); // removes menu bar
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
