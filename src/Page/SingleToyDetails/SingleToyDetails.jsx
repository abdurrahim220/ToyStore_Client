import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const SingleToyDetails = () => {

    const loadedData = useLoaderData()
    const { image, name, seller_name, email, price, rating, quantity, description } = loadedData;
    useTitle('SingleToyDetails')
    return (
        <div className='my-5'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Toy Name : {name}</h2>
                    <p>Product Description : {description}</p>
                    <p>Email: {email}</p>
                    <p>Price : {price}</p>
                    <p>Rating: {rating}</p>
                    <p>Quantity : {quantity}</p>

                </div>
            </div>
        </div>
    );
};

export default SingleToyDetails;