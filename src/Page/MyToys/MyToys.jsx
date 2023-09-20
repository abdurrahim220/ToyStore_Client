import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import MyToysTable from './MyToysTable';
import useTitle from '../../hooks/useTitle';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [addToys, setAddToys] = useState([])
    useTitle('MyToys')

    useEffect(() => {
        fetch(`https://toy-store-server-delta.vercel.app/myToys/${user.email}`)

            .then(res => res.json())
            .then(data => {
                setAddToys(data)
            })
    }, []);

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://toy-store-server-delta.vercel.app/deleteToys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = addToys.filter(toy => toy._id !== id)
                            setAddToys(remaining);
                        }
                    })

            }
        });
    }

    // handle sort 
    const handleaAcc = () => {
       fetch(`https://toy-store-server-delta.vercel.app/ascending?email=${user?.email}`)
       .then(res => res.json())
       .then(data => {
           setAddToys(data)
       })
       
    }

    const handleaDec = () => {
        fetch(`https://toy-store-server-delta.vercel.app/descending?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setAddToys(data)
        })
        
    }

    return (
        <div className='py-5'>
            <div className='flex gap-5 py-5 justify-center items-center'>
                {/* Add your form elements here */}

                <button className='btn btn-primary' onClick={handleaAcc}>Sort Ascending</button>
                <button className='btn btn-primary' onClick={handleaDec}>Sort Descending</button>
            </div>

            <div className="overflow-x-auto w-full py-3">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Toy Name</th>
                            <th>Seller Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Category</th>
                            <th>Rating</th>
                            <th>Description</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addToys.map(toy => <MyToysTable key={toy._id} toy={toy} handleDelete={handleDelete}></MyToysTable>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;