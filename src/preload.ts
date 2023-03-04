import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("getPosition", (callback) =>
  ipcRenderer.on('update-position', callback)
);
