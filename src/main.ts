import { app, Tray, Menu } from "electron";

let tray = null;
app.whenReady().then(() => {
  tray = new Tray("./assets/icons/iconTemplate.png");
  const contextMenu = Menu.buildFromTemplate([
    { label: "Item1", type: "radio" },
    { label: "Item2", type: "radio" },
    { label: "Item3", type: "radio", checked: true },
    { label: "Item4", type: "radio" },
  ]);
  tray.setToolTip("This is my application.");
  tray.setContextMenu(contextMenu);
});
