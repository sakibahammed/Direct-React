import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {postId} = useParams();
    return (
        <div>
           <h4>This is post detail for : {postId}</h4> 
        </div>
    );
};

export default PostDetail;