import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";

import { Time } from '../../components';

import './Message.scss';


const Message = ({avatar, user, text, date, isMe}) => (
    <div className={classNames('message', {'message--isme': isMe})}>
        <div>
            <img className="message__avatar" src={avatar} alt={`Avatar ${user.fullname}`} />
        </div> 
        <div className="message__content">
            <div className="message__bubble">
                <p className="message__text">{text}</p>
            </div>
            <span className="message__date">
                <Time date={date} />
            </span>
        </div>
    </div>
    
)

Message.defaultProps = {
    user: {}
};

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,

};

export default Message;