import React from 'react';
import ReactEmoji from 'react-emoji';
import './style.css';

const Message = ({ message: { user, text }, name }) => {
    let isCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isCurrentUser = true;
    }

    return (
        isCurrentUser
        ? (
            <div className='messageContainer justifyEnd'>
                <p className='sentText pr-10'>
                    {trimmedName}
                </p>
                <div className='messageBox backgroungBlue'>
                    <p className='messageText colorWhite'>
                        {ReactEmoji.emojify(text)}
                    </p>
                </div>
            </div>
        )
        : (
            <div className='messageContainer justifyStart'>
                <div className='messageBox backgroundLight'>
                    <p className='messageText colorDark'>
                        {ReactEmoji.emojify(text)}
                    </p>
                </div>
                <p className='sentText'>
                    {user}
                </p>
            </div>
        )
    );
};

export default Message
