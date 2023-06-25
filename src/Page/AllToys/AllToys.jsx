import React, { useEffect, useState } from 'react';

import AllToysCard from './AllToysCard';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {

    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(20)



    useTitle('AllToys')

    useEffect(() => {
        fetch(`https://toy-store-server-delta.vercel.app/allToys?limit=${limit}&page=${page}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
                // console.log(data);
            })
    }, [limit,page]);
    const handleSearch = () => {
        fetch(`https://toy-store-server-delta.vercel.app/toySearchByToyName/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setToys(data);
            });
    };
    return (
        <div className='my-5 py-2'>
            <h1 className='text-center text-2xl font-semibold my-3'>All toys available here</h1>

            <div className="search-box p-2 text-center my-3">
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder='Search By Toy Name'
                    type="text"
                    className="input input-sm w-1/4 input-bordered input-accent"
                />{" "}
                <button className='btn btn-primary' onClick={handleSearch}>Search</button>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Toy Name</th>
                            <th>Seller Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Other</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map((toy, index) => <AllToysCard
                                key={toy._id} toy={toy} index={index}
                            ></AllToysCard>)
                        }
                    </tbody>
                </table>
            </div>

            <div className="btn-group btn-success justify-items-center">
                <button className="btn btn-success" onClick={() => {page === 1 ? setPage(1) : setPage(page - 1);}} disable={page===1}>«</button>
                <button className="btn ">{page}</button>
                <button className="btn btn-success" onClick={() => {page === Math.round(1000 / limit) ? setPage(Math.round(1000 / limit)) : setPage(page + 1);}} disable={Math.round(1000 / limit)}>»</button>
            </div>

        </div>
    );
};

export default AllToys;