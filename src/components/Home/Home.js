import React from 'react';
import Header from '../Global/Header';
import Sidebar from '../Global/Sidebar';
import Posts from './Post/Posts';

const Home = () => {
    return (
        <>
            <Header />
            <div className="">
                <div className="row">
                    <div className="col-md-12 col-lg-4">
                        {/* <Sidebar /> */}
                    </div>
                    <div className="col-md-12 col-lg-5">
                        <Sidebar />
                        <Posts />
                    </div>
                    <div className="col-md-3">

                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;