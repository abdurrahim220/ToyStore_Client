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
        <div>

            <Banner></Banner>
            <ViewReview></ViewReview>
            <Gallery></Gallery>
            <AosData></AosData>
            <ReactTab></ReactTab>
            <ClientReview></ClientReview>
            
        </div>
    );
};

export default Home;