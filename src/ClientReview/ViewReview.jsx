import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const ViewReview = () => {
    const [reviewer,setReviewer] = useState([])
    useEffect(()=>{
        fetch(`https://toy-store-server-delta.vercel.app/allToysReview`)
        .then(res=>res.json())
        .then(data =>{
            // console.log(data);
            setReviewer(data)
        })
    },[])
    return (
        <div className='my-10'>
          <h2 className='text-center my-2 text-2xl font-bold mt-3 mb-3'>Total {reviewer.length} number of <span className='text-blue-400'>Client Review</span></h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
            {
                reviewer.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
            }
          </div>

        </div>
    );
};

export default ViewReview;