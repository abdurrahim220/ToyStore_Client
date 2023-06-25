import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const AllToysCard = ({ toy, index }) => {
    const { user } = useContext(AuthContext)
    const { name, seller_name, price, category, quantity, _id } = toy;
    useTitle('AllToyCard')


    return (
        <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{seller_name}</td>
            <td>{price}</td>
            <td>{category}</td>
            <td>{quantity}</td>
            <td><Link to={`/toyDetails/${_id}`}><button className="btn btn-primary">View details</button></Link></td>
        </tr>

    );
};

export default AllToysCard;