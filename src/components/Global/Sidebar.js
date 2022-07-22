import React from 'react';
import userImg from '../../assets/img/user.jpg'
const Sidebar = ({ currentUser }) => {
    return (
        <div className=' mx-auto mt-3 sidebar'>
            <div className="container py-2">
                <div className="online-fiends">
                    <div className="friends">
                        <div className="friend">
                            <div className="friend-img">
                                <img src={'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'} alt="" />
                            </div>
                        </div>
                        <div className="friend">
                            <div className="friend-img">
                                <img src={currentUser?.profile_picture} alt="" />
                                <div className="online-icons">
                                    <span className='online-icon'></span>
                                </div>
                            </div>
                        </div>


                        <div className="friend">
                            <div className="friend-img">
                                <img src={'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'} alt="" />
                            </div>
                        </div>

                        <div className="friend">
                            <div className="friend-img">
                                <img src={currentUser?.profile_picture} alt="" />
                                <div className="online-icons">
                                    <span className='online-icon'></span>
                                </div>
                            </div>
                        </div>

                        <div className="friend">
                            <div className="friend-img">
                                <img src={'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'} alt="" />
                            </div>
                        </div>

                        <div className="friend">
                            <div className="friend-img">
                                <img src={currentUser?.profile_picture} alt="" />
                                <div className="online-icons">
                                    <span className='online-icon'></span>
                                </div>
                            </div>
                        </div>

                        <div className="friend">
                            <div className="friend-img">
                                <img src={'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'} alt="" />
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>

    );
};

export default Sidebar;