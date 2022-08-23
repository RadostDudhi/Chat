import React from "react";
import orderBy from 'lodash/orderBy';
import { Space, Input, Empty } from 'antd';

import { DialogItem } from "../../components";

import './Dialogs.scss';

const { Search } = Input;

const onSearch = (value) => console.log(value);

const Dialogs = ({ items, userId, onSearch, inputValue }) => (
    <div className="dialogs">
        <div className="dialogs__search">
            <Space direction="vertical">
                <Search 
                placeholder="Search"
                value={inputValue} 
                allowClea 
                onChange={e => onSearch(e.target.value)} />
            </Space>
        </div>
        <h3 className="chat__sidebar-dialogs-header">Chats</h3>
        {items.length ? (orderBy(items, ['created_at'], ['desc']).map( item => (
            <DialogItem 
                key={item._id}
                user={item.user}
                message={item}
                unreaded={0}
                isMe={item.user._id === userId}
            />
            ))) : (
            <Empty description={"Not found"} />)
        }
    </div>
);

export default Dialogs;