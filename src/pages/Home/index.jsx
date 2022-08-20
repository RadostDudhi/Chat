import React from "react";
//import {
 //   Routes,
 //   Route
  //} from 'react-router-dom';
import { Message } from "../../components";


import './Home.scss';

const Home = () => ( 
    
    <section className="home">
        <Message 
        avatar="https://sun6-23.userapi.com/s/v1/if1/SrG0dzIWKMmFcc_b2xw5S9JsKqz6mnt9_FuHwma0bOt2Qv9uvOhT6NrlGmLDlxvkqeKTie8D.jpg?size=100x100&quality=96&crop=321,1,1916,1916&ava=1" 
        text="Quickly come to the meeting room 1B, we have a big server issue" 
        date="Sat Aug 20 2022 19:37:12"  
        />
        <Message 
        avatar="https://sun6-21.userapi.com/s/v1/if1/e9qP6NNivkqG4rRkEr3ynauZlOYr-N8HOnEKlI5M8ye7P88_j7BcbKu0Dj-PeWBPe1OHni02.jpg?size=100x100&quality=96&crop=0,97,1104,1104&ava=1" 
        text="I'm having breakfast right now, can't you wait for 10 minutes?" 
        date="Sat Aug 20 2022 19:45:10" 
        isMe={true}
        />
    </section>
    
);

export default Home;