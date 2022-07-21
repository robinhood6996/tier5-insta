import React from 'react';
import userImg from '../../../assets/img/user.jpg';
import postImg from '../../../assets/img/post.jpg';
import { FiThumbsUp } from 'react-icons/fi';
import { VscComment } from 'react-icons/vsc';
import { RiShareForwardLine } from 'react-icons/ri';
import { BsThreeDots } from 'react-icons/bs';
const Post = () => {
    return (
        <>
            <div className="post mx-auto mb-3">
                <div className="post-header d-flex justify-content-between align-items-center">
                    <div className="user d-flex align-items-center">
                        <div className="user-img me-2">
                            <img src={userImg} alt="" />
                        </div>
                        <div className="user-name fs-20">
                            <h4>Robinhood</h4>
                        </div>
                    </div>
                    <div className="post-menu">
                        <BsThreeDots />
                    </div>
                </div>

                {/* post content  */}

                <div className="post-content">
                    <div className="post-caption">
                        <p className="caption">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, cum doloribus necessitatibus nostrum tempora laudantium adipisci corporis unde sunt dignissimos.
                        </p>
                    </div>

                    <div className="post-image-inner">
                        <img src={postImg} alt="" className='post-img' />
                    </div>
                </div>

                {/* Post footer  */}
                <div className="post-footer">
                    <div className="container footer-options">
                        <div className="container actions mt-2">
                            <div className='actions-post'>
                                <div className="like cursor-pointer"><div><svg aria-label="Like" class="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                                </svg></div></div>
                                <div className="comment cursor-pointer">
                                    <svg aria-label="Comment" class="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path>
                                    </svg></div>
                                <div className="share cursor-pointer"><svg aria-label="Share Post" class="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon>
                                </svg></div>
                            </div>

                            <div className="post-save">
                                <svg aria-label="Save" class="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                            </div>
                        </div>

                        <div className="summaries">
                            <div className="likes">
                                {/* <div><FiThumbsUp /></div> */}
                                <div>10 Likes</div>
                            </div>

                        </div>
                        {/* <hr /> */}
                        <div className="caption-insta-post">


                            <div className="caption-text">
                                <div className="user-name-post"><h4>Robinhood</h4></div>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, minima voluptates et natus nulla voluptate quasi cum. Atque, unde asperiores?</p>
                            </div>
                        </div>

                        <div className="comment-summary">
                            <p>View All 2 Comment</p>
                        </div>

                        {/* Comment box  */}
                        <div className="comment-area">
                            <hr />
                            <div className="post-comment">
                                <div className="user-img me-2">
                                    <img src={userImg} alt="" />
                                </div>
                                <div className="write w-100">
                                    <input type="text" placeholder='Write your comment' className='w-100 border-0 write-comment-box' name="" id="" />
                                </div>
                            </div>

                            <div className="comment mt-3 d-flex justify-content-start">
                                <div className="user-img-commenter me-2">
                                    <img src={userImg} alt="" />
                                </div>
                                <div className="comment-content">
                                    <div>
                                        <h4 className='commenter-name'>Rafayet Hossain</h4>
                                        <p className='comment-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, dolorem.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Post;