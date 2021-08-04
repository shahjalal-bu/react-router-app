import React from 'react';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Post = () => {
    const [post, setPost] = useState([]);
  const loadData = async () =>{
    const profile = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    let profileJson =await profile.json()
    profileJson && setPost(profileJson);

  }
  useEffect(() =>{
     loadData()   
  },[])
    return (
        <div>
            <div className="heading"><h1>Our site have {post.length} post</h1></div>
            <div>
              {  
              post.map((item, index) => {
                return(
                    <div className="contain" key={index}>
                        <div><h4>{item.title}</h4></div>
                        <div><p>{item.body}</p></div>
                        <button>
                        <Link to={`/postDetails/${item.id}`}>Continue Reading </Link>
                            </button>
                    </div>
                )})
                
                }
            </div>
        </div>
    );
};

export default Post;