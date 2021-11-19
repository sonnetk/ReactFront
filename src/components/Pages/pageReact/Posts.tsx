import React from "react";
import '/home/user/app-react/src/styles/style.css'

interface Props{
    id: number,
    title: string,
    body: string,
}

function Posts({posts}:{posts:[]}) {
    return (
        <div>
            {posts.slice(-5).map((post:Props)  => (
                <div className='post' key={post.id}>
                    <span onClick={() => alert('Тут должен быть попап')}>&#10060;</span>
                    <h4>{post.title}</h4>
                    <div>{post.body}</div>
                </div>
            ))}
        </div>
    );
}
export default Posts;