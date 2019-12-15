var express = require('express');
var socket = require('socket.io');
var app = express();

app.use(express.static('public'));

var server = app.listen(4000, function() {
    console.log("4000 port listen")
});

var io = socket(server);
io.on('connection', function(socket) {
    // console.log("Socket connection succesfully", socket.id)
    socket.on('chat', function(data) {
        io.sockets.emit('chat', data);

    });

    socket.on('yaziyor', function(data) {
        socket.broadcast.emit('yaziyor', data);
    })

});