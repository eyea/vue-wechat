import { wsUri } from './websocket_config'

const socket = new WebSocket(wsUri)

const socketOnOpen = () => {
  console.log('CONNECTED')
  socket.send('hello websocket ')
}

const socketOnClose = () => {
  console.log('DISCONNECTED')
}

const socketOnMessage = (event) => {
  console.log('ONMESSAGE')
  console.log('event', event)
}

const socketOnError = () => {
  console.log('ONERROR')
}

export default () => {
  socket.addEventListener('open', () => {
    socketOnOpen()
  })
  socket.addEventListener('close', () => {
    socketOnClose()
  })
  socket.addEventListener('message', (event) => {
    socketOnMessage()
  })
  socket.addEventListener('error', () => {
    socketOnError()
  })
}
