import React from "react";
import classNames from "classnames";

import { Time } from '../../components';

import './DialogItem.scss';

const getAvatar = avatar => {
    if (avatar) {
        return <img src="https://sun6-23.userapi.com/s/v1/if1/SrG0dzIWKMmFcc_b2xw5S9JsKqz6mnt9_FuHwma0bOt2Qv9uvOhT6NrlGmLDlxvkqeKTie8D.jpg?size=100x100&quality=96&crop=321,1,1916,1916&ava=1" />;
    } else {
        //makeAvatar
    }
};

const DialogItem = ({ user, message, unreaded }) => (
    <div className={classNames("dialogs__item", {
        "dialogs__item--online": user.isOnline})}>
        <div className="dialogs__item-avatar">
            {/*<img src={user.avatar} alt={`Avatar ${user.fullname}`} /> */}
            {getAvatar(
                "https://sun6-23.userapi.com/s/v1/if1/SrG0dzIWKMmFcc_b2xw5S9JsKqz6mnt9_FuHwma0bOt2Qv9uvOhT6NrlGmLDlxvkqeKTie8D.jpg?size=100x100&quality=96&crop=321,1,1916,1916&ava=1"
            )}
            
        </div>
        <div className="dialogs__item-info">
            <div className="dialogs__item-info-top">
                <b>Jorny</b>
                <span>
                    <Time date={new Date()} />
                </span>
            </div>
            <div className="dialogs__item-info-buttom">
                <p>Police are required to read your Miranda Rights after an arrest and before questioning. If they fail to “read you your rights,” it may make some or all of the following questioning inadmissible in court and affect the prosecution's ability to convict you for a crime.</p>
            </div>
            {unreaded>0 && (
            <div className="dialogs__item-unread-count">
                {unreaded}
            </div>)}
        </div>
    </div>
)

export default DialogItem;