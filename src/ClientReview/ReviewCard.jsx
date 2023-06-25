import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, image, comment } = review;
    return (
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={image} />
                    </div>
                </div>
                <h2 className="card-title">{name}</h2>
                <p>{comment}</p>
                
            </div>
        </div>
    );
};

export default ReviewCard;