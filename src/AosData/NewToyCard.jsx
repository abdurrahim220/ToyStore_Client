import React from "react";

const NewToyCard = ({ toy }) => {
  return (
    <div className="card w-96  bg-base-100 border mb-10">
      <figure>
        <img className="h-80" src={toy.image} alt="img" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {toy.name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{toy.description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Price: ${toy.price}</div>
          <div className="badge badge-outline">Rating: {toy.rating}</div>
        </div>
      </div>
    </div>
  );
};

export default NewToyCard;
