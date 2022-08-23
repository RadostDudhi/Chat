import React from "react";
import { Input, Button } from 'antd';
import { UserOutlined, SendOutlined } from '@ant-design/icons';

import { Messages, Status} from "../../components";
import { Dialogs } from "../../containers";

import './Home.scss';

const Home = () => ( 
    
    <section className="home">
        <div className="chat">
            <div className="chat__sidebar">
                <div className="chat__sidebar-header">
                    <div className="chat__sidebar-header-top">
                        <UserOutlined />
                    </div>
                </div>
                
                <div className="chat__sidebar-dialogs">
                                   
                    <Dialogs items={[
                    {
                        _id: Math.random(),   
                        text: 'Didn\'t I tell you that the cop had to go hunt up a janitor or something to get the door open.',
                        created_at: 'Sun Aug 21 2020 19:25:01',
                        user:{
                            _id: 1,
                            fullname: 'Jorny',
                            avatar: 'https://sun6-23.userapi.com/s/v1/if1/SrG0dzIWKMmFcc_b2xw5S9JsKqz6mnt9_FuHwma0bOt2Qv9uvOhT6NrlGmLDlxvkqeKTie8D.jpg?size=100x100&quality=96&crop=321,1,1916,1916&ava=1'
                        }
                    },
                    {
                        _id: Math.random(),   
                        text: 'Hello! 1ok',
                        created_at: 'Sun Aug 09 2020 19:40:01',
                        user:{
                            _id: 2,
                            fullname: 'Max',
                            avatar: 'https://sun6-21.userapi.com/s/v1/if1/e9qP6NNivkqG4rRkEr3ynauZlOYr-N8HOnEKlI5M8ye7P88_j7BcbKu0Dj-PeWBPe1OHni02.jpg?size=100x100&quality=96&crop=0,97,1104,1104&ava=1'
                        }
                    },
                    {
                        _id: Math.random(),   
                        text: 'Hello! 2ok',
                        created_at: 'Sun Aug 22 2020 19:40:01',
                        user:{
                            _id: 2,
                            fullname: 'Max',
                            avatar: 'https://sun6-21.userapi.com/s/v1/if1/e9qP6NNivkqG4rRkEr3ynauZlOYr-N8HOnEKlI5M8ye7P88_j7BcbKu0Dj-PeWBPe1OHni02.jpg?size=100x100&quality=96&crop=0,97,1104,1104&ava=1'
                        }
                    },
                    {
                        _id: Math.random(),   
                        text: 'Hello! 3ok',
                        created_at: 'Sun Aug 20 2020 19:45:01',
                        user:{
                            _id: 2,
                            fullname: 'Max',
                            avatar: 'https://sun6-21.userapi.com/s/v1/if1/e9qP6NNivkqG4rRkEr3ynauZlOYr-N8HOnEKlI5M8ye7P88_j7BcbKu0Dj-PeWBPe1OHni02.jpg?size=100x100&quality=96&crop=0,97,1104,1104&ava=1'
                        }
                    },
                    {
                        _id: Math.random(),   
                        text: 'Hello! ok',
                        created_at: 'Sun Aug 12 2020 19:40:01',
                        user:{
                            _id: 2,
                            fullname: 'Max',
                            avatar: 'https://sun6-21.userapi.com/s/v1/if1/e9qP6NNivkqG4rRkEr3ynauZlOYr-N8HOnEKlI5M8ye7P88_j7BcbKu0Dj-PeWBPe1OHni02.jpg?size=100x100&quality=96&crop=0,97,1104,1104&ava=1'
                        }
                    },
                    {
                        _id: Math.random(),   
                        text: 'Hello! ok',
                        created_at: 'Sun Aug 16 2020 19:40:01',
                        user:{
                            _id: 2,
                            fullname: 'Max',
                            avatar: 'https://sun6-21.userapi.com/s/v1/if1/e9qP6NNivkqG4rRkEr3ynauZlOYr-N8HOnEKlI5M8ye7P88_j7BcbKu0Dj-PeWBPe1OHni02.jpg?size=100x100&quality=96&crop=0,97,1104,1104&ava=1'
                        }
                    },
                    {
                        _id: Math.random(),   
                        text: 'Hello! ok',
                        created_at: 'Sun Aug 22 2020 19:40:01',
                        user:{
                            _id: 2,
                            fullname: 'Max',
                            avatar: 'https://sun6-21.userapi.com/s/v1/if1/e9qP6NNivkqG4rRkEr3ynauZlOYr-N8HOnEKlI5M8ye7P88_j7BcbKu0Dj-PeWBPe1OHni02.jpg?size=100x100&quality=96&crop=0,97,1104,1104&ava=1'
                        }
                    }]} />
                </div>
            </div>
            <div className="chat__dialog">
                <div className="chat__dialog-header">
                    <img className="chat__dialog-header-avatar" src={'https://sun6-23.userapi.com/s/v1/if1/SrG0dzIWKMmFcc_b2xw5S9JsKqz6mnt9_FuHwma0bOt2Qv9uvOhT6NrlGmLDlxvkqeKTie8D.jpg?size=100x100&quality=96&crop=321,1,1916,1916&ava=1'} alt={`Avatar`} />
                    <div className="chat__dialog-header-username">Jorny</div>
                    <Status online/>
                </div>
                <div className="chat__dialog-messages">
                    <Messages />
                </div>
                <div className="chat__dialog-input">
                    <Input placeholder="Type your message" />
                    <Button shape="circle" icon={<SendOutlined/>} size="large" />                    
                </div>
            </div>
        </div>

    </section>
    
);

export default Home;