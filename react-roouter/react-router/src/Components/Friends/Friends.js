import React, { useState } from 'react';
import { useEffect } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends , setFriends] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data=>setFriends(data));
    },[])
    return (
        <div>
            <h1>Hello friends kemon acho? </h1>
            <p><small>Parle kichu taka dis...{friends.length}</small></p>
            {
                friends.map(friend => <Friend key={friend.id} friend = {friend}></Friend>)
            }
        </div>
    );
};

export default Friends;