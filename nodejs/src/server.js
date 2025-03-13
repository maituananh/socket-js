import { createServer } from 'node:http';
import { Server } from 'socket.io';

const hostname = '127.0.0.1';
const port = 8080;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000'
  }
})

io.on('connection', (socket) => {
  console.log(`connected ${socket.id}`);
  
  socket.emit('test-id', {
    message: 'boos lao'
  })

  socket.on('disconnect', () => { 
    console.log(`disconnected ${socket.id}`);
  })
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});