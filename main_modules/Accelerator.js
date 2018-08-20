const { globalShortcut } = require("electron");

const ret = globalShortcut.register('CommandOrControl+X', () => {
  console.log('CommandOrControl+X is pressed')
})

export default ret;