import React from "react";
import classNames from "classnames";
import format from 'date-fns/format';

const getMessageTime = created_at => {
    if (true) {
        return format(new Date(created_at), 'PP')
    }
};

// const getAvatar = avatar => {
//     if (avatar) {
//         return {/*<img src={user.avatar} />;*/}
//     } else {
//         //makeAvatar
//     }
// };

const DialogItem = ({ user, message, unreaded, isMe }) => (
    <div className={classNames("dialogs__item", {
        "dialogs__item--online": user.isOnline})}>
        <div className="dialogs__item-avatar">
            <img src={user.avatar} alt={`Avatar ${user.fullname}`} />            
        </div>
        <div className="dialogs__item-info">
            <div className="dialogs__item-info-top">
                <b>{user.fullname}</b>
                <span>
                    {getMessageTime(message.created_at)}
                </span>
            </div>
            <div className="dialogs__item-info-buttom">
                <p>{message.text}</p>
                {/*{isMe && }*/}
            </div>
            {unreaded>0 && (
            <div className="dialogs__item-unread-count">
                {unreaded}
            </div>)}
        </div>
    </div>
)

export default DialogItem;