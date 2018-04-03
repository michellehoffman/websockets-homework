const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
  socket.broadcast.emit('connect message', 'someone has joined this chat');

  socket.on('chat message', message => {
    io.emit('chat message', message);
  }); 

  socket.on('typing', user => {
    socket.broadcast.emit('typing', user);
  });

  socket.on('no typing', user => {
    socket.broadcast.emit('no typing', user);
  });

  socket.on('disconnect', () => {
    socket.broadcast.emit('disconnect message', 'someone has left this chat');
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
    