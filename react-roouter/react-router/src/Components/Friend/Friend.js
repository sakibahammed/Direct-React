import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name , username , id} = props.friend;
    const navigate = useNavigate()
    const showFriendDetail = () =>{
        navigate('/about/' + id)
    }
    return (
        <div>
            <h2>Name :{name} </h2>
            <button onClick={showFriendDetail}>{username} {id}</button>
        </div>
    );
};

export default Friend;