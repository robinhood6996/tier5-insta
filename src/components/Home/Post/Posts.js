import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Post from './Post';

const Posts = () => {
    const [posts, setPosts] = useState()

    useEffect(() => {
        axios.get('http://localhost:5000/insta-posts')
            .then(res => {
                setPosts(res?.data);
                console.log('res', res?.data);
            })
    }, [])


    return (
        <>
            <section className='posts-section'>
                <div className='container my-5'>
                    <div className="posts ">
                        {
                            posts?.map(post => {
                                return <Post post={post} />
                            })
                        }


                    </div>
                </div>
            </section>
        </>
    );
};

export default Posts;