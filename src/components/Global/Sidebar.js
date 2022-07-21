import React from 'react';
import userImg from '../../assets/img/user.jpg'
const Sidebar = () => {
    return (
        <div className=' mx-auto mt-3 sidebar'>
            <div className="container py-2">
                <div className="online-fiends">
                    <div className="friends">
                        <div className="friend">
                            <div className="friend-img">
                                <img src={userImg} alt="" />
                            </div>
                        </div>
                        <div className="friend">
                            <div className="friend-img">
                                <img src={userImg} alt="" />
                                <div className="online-icons">
                                    <span className='online-icon'></span>
                                </div>
                            </div>
                        </div>
                        <div className="friend">
                            <div className="friend-img">
                                <img src={userImg} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Sidebar;