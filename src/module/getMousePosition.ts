import { globalShortcut, ipcMain, screen } from "electron";
export function getMousePosition(
  mainWindow: Electron.CrossProcessExports.BrowserWindow
): void {
  function run() {
    const { x, y } = screen.getCursorScreenPoint();
    mainWindow.webContents.send('update-position', { x, y })
  }

  ipcMain.on('get-position', () => {
    run()
  })

  mainWindow.setIgnoreMouseEvents(true)

  globalShortcut.register('Alt+X', () => {
    mainWindow.focus()
    mainWindow.webContents.send('focus')
  })
  globalShortcut.register('Alt+C', () => {
    mainWindow.blur()
    mainWindow.webContents.send('blur')
  })

  if (mainWindow.isFocused) mainWindow.webContents.send('focus')
}
