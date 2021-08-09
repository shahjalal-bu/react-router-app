import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const PostDetails = () => {
    const [data, setData] = useState({})
    const [comment, setComment] = useState([])
    const [user, setUser] = useState([])
   const {id} = useParams();

   const loadData = async () =>{
    const profile = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    let profileJson =await profile.json()
    setData(profileJson);
    const comment = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    const commentJson = await comment.json()
    setComment(commentJson)
    const user = await fetch(`https://randomuser.me/api/?results=${commentJson.length}`);
    const userJson = await user.json()
    userJson && setUser(userJson.results);
    

}
   useEffect(()=>{
        loadData()     
   },[id])

   console.log(user[0]?.picture.thumbnail);
    return (
      <div className="postDetails">
        <div className="title">{`${data.title}`}</div>
        <div className="post">
          {data.body}
          {data.body}
          {data.body}
          {data.body}
          {data.body}
          {data.body}
          {data.body}
          {data.body}
          {data.body}
          <br />
          <br />
          <br />
          {comment.map((comment, index) => (
            <div key={index}>
              <div className="comment-container">
                <div className="left">
                  <img
                    src={user[index]?.picture.thumbnail}
                    alt={user[index]?.name.first}
                  />
                </div>
                <div className="right">
                  <div>{user[index]?.name.first}</div>
                  <div>{comment.email}</div>
                </div>
              </div>
              <div className="comment-body">{comment.body}</div>
            </div>
          ))}
          <br />
          <Link to="/">
            <button>Back To Home ♦</button>
          </Link>
        </div>
      </div>
    );
};

export default PostDetails;
  