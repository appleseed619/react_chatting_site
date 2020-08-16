import React from 'react';
import onlineIcon from '../../../icons/onlineIcon.png';
import closeIcon from '../../../icons/closeIcon.png';
import './style.css';

const InfoBar = ({ room }) => {
    return (
        <div className='infoBar'>
            <div className='leftInnerContainer'>
                <img src={onlineIcon} alt='online icon' />
                <h3>
                    {room}
                </h3>
            </div>
            <div className='rightInnerContainer'>
                <a href='/'>
                    <img src={closeIcon} alt='close' />
                </a>
            </div>
        </div>
    )
}

export default InfoBar;
