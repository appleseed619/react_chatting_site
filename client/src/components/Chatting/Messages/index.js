import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';
import './style.css';

const Messages = ({ messages, name }) => {
    return (
        <ScrollToBottom className='messages'>
            {
                messages.map( (message, i) => 
                    <Message 
                        message={message}
                        name={name}
                        key={i}
                    />
                )
            }
        </ScrollToBottom>
    )
}

export default Messages
