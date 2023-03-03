import { screen } from "electron";
import { Update } from "../common/keys";
export function getMousePosition(
  mainWindow: Electron.CrossProcessExports.BrowserWindow
): void {
  function run() {
    setTimeout(() => {
      const { x, y } = screen.getCursorScreenPoint();
      mainWindow.webContents.send(Update, { x, y });
      run();
    }, 60);
  }

  run();
}
