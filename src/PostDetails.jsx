import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const PostDetails = () => {
    const [data, setData] = useState({})
   const {id} = useParams();

   const loadData = async () =>{
    const profile = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    let profileJson =await profile.json()
    setData(profileJson);
}
   useEffect(()=>{
        loadData()     
   },[id])

   console.log(data);
    return (
        <div className="postDetails">
            <div className="title">{`${data.title}`}</div>
            <div className="post">
                {(data.body)}
                {(data.body)}
                {(data.body)}
                {(data.body)}
                {(data.body)}
                {(data.body)}
                {(data.body)}
                {(data.body)}
                {(data.body)}
                <br />
                <br />
                <Link to="/">
                <button>Back To Home ♦</button>
                </Link>
            </div>
        </div>
    );
};

export default PostDetails;
  