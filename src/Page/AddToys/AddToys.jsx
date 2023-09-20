import React, { useContext } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const AddToys = () => {
    const {user} = useContext(AuthContext)
   

    useTitle('AddToys')
    const handleAddToys = (event) => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const seller_name = form.seller_name.value;
        const email = form.email.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const AddToys = {
            image, name, seller_name, email, price, quantity, category, rating, description
        }
        console.log(AddToys);

        fetch(`https://toy-store-server-delta.vercel.app/addToys`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AddToys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire('Info Added Successfully');
                }
            })
    }




    return (
        <div className="container mx-auto  py-14">
            <h1 className='text-center pb-3 text-2xl lg:text-4xl font-bold font-serif'>Adding Toys Are here</h1>

            <form className='border-2 py-5 px-5' onSubmit={handleAddToys}>
                {/* row 1 */}
                <div className="md:flex gap-4 mb-2">
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Image Url</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="image" placeholder="Image Url" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" placeholder="Toy Name" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                </div>

                {/* row 2 */}
                <div className="md:flex gap-4 mb-2">
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="seller_name" defaultValue={user.displayName} placeholder="seller name" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <label className="input-group">

                            <input type="email" name="email" defaultValue={user.email} placeholder="seller email" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                </div>

                {/* row 3 */}
                <div className="md:flex gap-4 mb-2">
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="quantity" placeholder="Available quantity" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                </div>

                {/* row 4 */}
                <div className="md:flex gap-4 mb-2">
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Sub-category </span>
                        </label>
                        <select className="select select-info w-full" name='category'>
                            <option disabled selected>Select any</option>
                            <option >Marvel Group</option>
                            <option >Caption America</option>
                            <option >Iron Man</option>
                        </select>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                </div>

                {/* row 5 */}

                <div className="form-control">
                    <label>Detail description</label>
                    <label className="input-group">
                        <input type="text" name='description' placeholder='detail description' className='input input-bordered w-fill' required/>
                    </label>
                </div>
                <input type="submit" value="ADD TOYS TO STORE" className="btn btn-block my-4" required/>
            </form>
        </div>
    );
};

export default AddToys;