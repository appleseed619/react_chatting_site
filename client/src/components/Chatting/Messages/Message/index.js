import React from 'react';
import ReactEmoji from 'react-emoji';
import './style.css';

const Message = ({ message: { user, text }, name }) => {
    let isCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();
    const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
    if (user === trimmedName) {
        isCurrentUser = true;
    }

    return (
        isCurrentUser
        ? (
            <div className='messageContainer justifyEnd'>
                <p className='sentText pr-10'>
                    {capitalize(trimmedName)}
                </p>
                <div className='messageBox backgroundBlue'>
                    <p className='messageText colorWhite'>
                        {ReactEmoji.emojify(capitalize(text))}
                    </p>
                </div>
            </div>
        )
        : (
            <div className='messageContainer justifyStart'>
                <div className='messageBox backgroundLight'>
                    <p className='messageText colorDark'>
                        {ReactEmoji.emojify(capitalize(text))}
                    </p>
                </div>
                <p className='sentText'>
                    {capitalize(user)}
                </p>
            </div>
        )
    );
};

export default Message
