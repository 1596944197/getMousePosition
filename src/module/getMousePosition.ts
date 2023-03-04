import { screen } from "electron";
export function getMousePosition(
  mainWindow: Electron.CrossProcessExports.BrowserWindow
): void {
  function run() {
    setTimeout(() => {
      const { x, y } = screen.getCursorScreenPoint();
      mainWindow.webContents.send('update-position', { x, y })
      run()
    }, 1000);
  }

  run()
}
