const users = [];

const addUser = ({ id, name, room }) => {
    name = name.toString().trim().toLowerCase();
    room = room.toString().trim().toLowerCase();

    const isUserExists = users.find( user => user.room === room && user.name === name);

    if (isUserExists) {
        return { error: 'User already exists...'}
    }
    const user = {
        id,
        name,
        room,
        points: '',
        showPoints: false
    };
    users.push(user);

    return { user };
}

const removeUser = id => {
    const index = users.findIndex( user => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

const getUser = id => users.find( user => user.id === id);

const getUsersInRoom = room => users.filter( user => user.room === room );

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
};
