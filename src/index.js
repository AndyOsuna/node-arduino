const app = require('./app')

// async function main() {
const server = /* await */ app.listen(app.get('port'), () => {
  console.log("Servidor en puerto", app.get('port'))
})
//   return srv
// }
// const server = main()

/* Sokcet.io */
const SocketIO = require('socket.io')
const io = SocketIO(server)


/* SERIALPORT */
const SerialPort = require('serialport')
const ReadLine = require('@serialport/parser-readline')
const parser = new ReadLine()

const port = new SerialPort('COM4', {
  baudRate: 9600
})

io.on('connection', socket => {
  console.log("Socket conectado")
  
  port.on('open', () => {
    console.log("Conexión abierta")
    
  })
  port.on('data', data => {
    d = parseInt(data)
    console.log(d)
    io.emit('hi', d)    
  })

  port.on('error', err => {
    console.log(err)
  })
})