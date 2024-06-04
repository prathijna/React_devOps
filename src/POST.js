import React from 'react'
import { useState } from 'react';

function POST() {
 const [state,setPost]=useState();
 const loadPost = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(Response => Response.json())
    .then(res => setPost(res))
 }
  return (
    <div>POST

        {
            state ? <p>id : {state.id}</p> : null
        }
        <button onClick={loadPost}>Get Post</button>
        <button onClick={loadPost}>Get Post</button>
        <button onClick={loadPost}>Get Post</button>
    </div>
  )
}

export default POST