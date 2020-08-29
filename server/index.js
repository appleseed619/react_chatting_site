const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
const router = require('./router');
const {
    addUser,
    getUser,
    getUsersInRoom,
    removeUser
} = require('./utils/users');

const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);
app.use(cors());
io.on('connection', (socket) => {
    console.log('We have a new connection....');

    socket.on('join', ({ name, room }, cb) => {
        const { error, user } = addUser({ id: socket.id, name, room });

        if (error) {
            return cb(error);
        }
        socket.join(user.room);

        socket.emit('message', { user: 'admin', text: `${user.name} welcome to the room ${user.room}`});
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!`});

        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
        cb();
    });

    socket.on('sendPoints', (message, callback) => {
        const user = getUser(socket.id) || {};
        let users = getUsersInRoom(user.room);
        users = users.map( usr => {
            if(usr.id === user.id) {
                usr.points = message;

                return usr;
            }
            return usr;
        })
        console.log(users)
        // io.to(user.room).emit('message', { user: user.name, points: message });
        io.to(user.room).emit('roomData', { room: user.room, users: users });
        callback();
    });

    socket.on('flipCards', (message, callback) => {
        const user = getUser(socket.id) || {};
        let users = getUsersInRoom(user.room);
        users = users.map( usr => {
            usr.showPoints = true;
            return usr;
        })
        console.log(users)
        // io.to(user.room).emit('message', { user: user.name, points: message });
        io.to(user.room).emit('roomData', { room: user.room, users: users });
        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id) || {};

        io.to(user.room).emit('message', { user: user.name, text: message });

        callback();
    });

    socket.on('disconnect', () => {
        console.log('User just left us....');
        const user = removeUser(socket.id);
        if (user) {
            io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left....`});
            io.to(user.room).emit('roomtData', { room: user.room, users: getUsersInRoom(user.room)});
        }
    });
});

server.listen(PORT, () => { console.log(`Server is running on port ${PORT}....`); });