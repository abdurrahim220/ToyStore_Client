import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import useTitle from '../hooks/useTitle';
import ReactTab from '../ReactTab/ReactTab';
import AosData from '../AosData/AosData';
import ClientReview from '../ClientReview/ClientReview';
import ViewReview from '../ClientReview/ViewReview';

const Home = () => {
    useTitle('Home')
    return (
        <div className='font-mono'>

            <Banner></Banner>
            <Gallery></Gallery>
            <AosData></AosData>
            <ReactTab></ReactTab>
            <ViewReview></ViewReview>
            <ClientReview></ClientReview>
            
        </div>
    );
};

export default Home;