import React, { useEffect, useState } from 'react';
import Post from './Post';

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {

    })


    return (
        <>
            <section className='posts-section'>
                <div className='container my-5'>
                    <div className="posts ">
                        <Post />
                        <Post />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Posts;