// import wx from 'wx'
let WebSocketServer = require('ws').Server
// let WebSocketServer = wx.Server

export const socket = new WebSocketServer({
  port: 8181
})
