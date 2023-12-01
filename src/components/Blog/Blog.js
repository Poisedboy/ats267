import React, { useEffect, useState } from 'react';
import { getPosts } from '../../api/serviceApi';
import './blog.css';
import ShowMoreText from './ShowMoreText';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getPosts();
                setPosts(data);
            } catch (e) {
                console.log("CUSTOM", e.message)
            }
        }
        fetchData();
    }, [setPosts]);

    const options = {
        timeZone: 'Europe/Kiev', // Set the desired time zone
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    };

    return (
        <>
            <NavBar />
            <div style={{ marginTop: '85px' }}>
                {posts.length === 0
                    ? <h1 style={{ textAlign: 'center' }}>Lodaing...</h1>
                    : posts.map(i => (
                        !i.caption
                            ? null
                            : <div key={i.id} className='posts-container'>
                                <div className='media'>
                                    {i.media_type === 'VIDEO' ? (
                                        <video controls>
                                            <source src={i.media_url} />
                                        </video>
                                    ) : (
                                        <img src={i.media_url} alt='Media pic' />
                                    )}
                                </div>
                                <div className='caption'>
                                    {/* <p>{i.caption}</p> */}
                                    <div className='meta'>
                                        <p>{new Date(i.timestamp).toLocaleString('en-GB', options)}</p>
                                        <Link to={i.permalink}>Open Instagram</Link>
                                    </div>
                                    <ShowMoreText text={i.caption} maxChars={250} />
                                </div>
                            </div>
                    ))
                }
            </div>
        </>
    );
};

export default Blog;