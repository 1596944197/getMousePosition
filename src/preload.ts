import { contextBridge, ipcRenderer } from "electron";
import { Update } from "./common/keys.js";

contextBridge.exposeInMainWorld("getPosition", (callback) =>
  ipcRenderer.on(Update, callback)
);
