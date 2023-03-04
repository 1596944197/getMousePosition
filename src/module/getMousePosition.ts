import { ipcMain, screen } from "electron";
export function getMousePosition(
  mainWindow: Electron.CrossProcessExports.BrowserWindow
): void {
  function run() {
    setTimeout(() => {
      const { x, y } = screen.getCursorScreenPoint();
      mainWindow.webContents.send('update-position', { x, y })
    });
  }

  ipcMain.on('get-position', () => {
    run()
  })
}
