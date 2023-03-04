import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("getPosition", () => {
  ipcRenderer.send("get-position");
});
contextBridge.exposeInMainWorld("updatePosition", (cb) => {
  ipcRenderer.on("update-position", cb);
});
