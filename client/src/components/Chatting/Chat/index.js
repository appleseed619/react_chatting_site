import React, { useState, useEffect} from 'react';
import qs from 'query-string';
import io from 'socket.io-client';
import InfoBar from '../InfoBar';
import Input from '../Input';
import Messages from '../Messages';
import TextContainer from '../TextContainer';
import './style.css';

let socket;
const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const { name, room } = qs.parse(location.search);
        socket = io(ENDPOINT);
        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, () => {});

        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([ ...messages, message]);
        });
        socket.on("roomData", ({ users }) => {
            setUsers(users);
          });
    }, [messages]);

    const sendMessage = e => {
        e.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => {
                setMessage('');
            })
        }
    }

    console.log(users);
    return (
        <div className='outerContainer'>
            <div className='container'>
                <InfoBar room={room} />
                <Messages 
                    messages={messages}
                    name={name}
                />
                <Input
                    message={message}
                    setMessage={setMessage}
                    sendMessage={sendMessage}
                />
            </div>
            <TextContainer users={users}/>
        </div>
    )
}

export default Chat;
