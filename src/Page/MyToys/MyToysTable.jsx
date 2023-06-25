import React from 'react';
import { Link } from 'react-router-dom';

const MyToysTable = ({ toy, handleDelete }) => {
    const { image, _id, name, seller_name, email, price, quantity, category, rating, description } = toy;
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={image} alt="Image" />
                    </div>
                </div>
            </td>
            <td>
                <p>{name}</p>
            </td>
            <td>{seller_name}</td>
            <td>
                <small>{email}</small>
            </td>
            <td>
                <p>{price}</p>
            </td>
            <td>
                {quantity}
            </td>
            <td>
                <p>{category}</p>
            </td>
            <td>
                <p>{rating}</p>
            </td>
            <td>{description}</td>
            <th>
                <Link to={`/updateToys/${_id}`}><button className="btn btn-ghost btn-xs">Edit</button></Link>
            </th>
        </tr>
    );
};

export default MyToysTable;