import React from "react";
import { Link } from "react-router-dom";

const ReactTabCard = ({ toy }) => {
  const { image, name, price, rating, _id } = toy;
  return (
    <div className="card w-96 bg-base-100 border mb-10">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <div className="py-2 flex gap-3">
          <div className="badge badge-outline">Price : {price}</div>
          <div className="badge badge-outline">Rating : {rating}</div>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/toyDetails/${_id}`}>
            <button className="btn-sm btn-primary rounded-lg font-mono">View details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReactTabCard;
