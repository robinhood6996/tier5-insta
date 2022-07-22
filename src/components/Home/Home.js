import React from 'react';
import Header from '../Global/Header';
import Sidebar from '../Global/Sidebar';
import Posts from './Post/Posts';

const Home = () => {
    const currentUser = { name: 'Robinhood', profile_picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoxO6KmZ_OuG0GPobuHsYvqCkN8jRQ0FeHYw&usqp=CAU' }
    return (
        <>
            <Header currentUser={currentUser} />
            <div className="">
                <div className="row">
                    <div className="col-md-12 col-lg-4">
                        {/* <Sidebar /> */}
                    </div>
                    <div className="col-md-12 col-lg-5">
                        <Sidebar currentUser={currentUser} />
                        <Posts currentUser={currentUser} />
                    </div>
                    <div className="col-md-3">

                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;