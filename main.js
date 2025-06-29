const { app, BrowserWindow, Menu } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    maxWidth: 500,
    height: 600,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#555555',
      symbolColor: '#ffffff',
    },
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.setMenu(null); 
  win.loadFile('index.html');
};

app.whenReady().then(() => {
  createWindow();
  Menu.setApplicationMenu(null); 
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