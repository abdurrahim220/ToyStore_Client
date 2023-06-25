import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';



const UpdateToys = () => {
    const params = useParams()
    // console.log(params);
    const location = useLocation()
    const navigate = useNavigate()
    

    const handleAddToys = (event) => {
        event.preventDefault();
        const form = event.target;

        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const AddToys = {
            price, quantity, description
        }
        // console.log(AddToys);

        fetch(`https://toy-store-server-delta.vercel.app/updateToy/${params.id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AddToys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire('Info Update Successfully');
                    navigate('/myToys')
                }
            })
    }

    return (
        <div className="container my-7">
            <h1>Adding Toys Are here</h1>

            <form onSubmit={handleAddToys}>

                <div className="md:flex gap-4 mb-2">
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="quantity" placeholder="Available quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>


                <div className="form-control">
                    <label>Detail description</label>
                    <label className="input-group">
                        <input type="text" name='description' placeholder='detail description' className='input input-bordered w-fill' />
                    </label>
                </div>
                <input type="submit" value="Update Toy Store" className="btn btn-block mt-2" />
            </form>
        </div>
    );
};

export default UpdateToys;