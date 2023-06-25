import React from 'react';

const AosData = () => {


    return (
        <div className='my-8 container'>

            <h2 className='text-center text-2xl font-bold mb-7'>New To <span className='text-sky-300'>come Toys</span></h2>
            {/* First one left */}
            <div className='justify-center mb-24'>
                <div className="card w-96 bg-base-100 shadow-xl mb-10" data-aos="flip-left">
                    <figure><img src={`https://i.ibb.co/S37jhHh/images-3.jpg`} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Marvel Infinity
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>This toy is the best toy in the town</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Price: $500</div>
                            <div className="badge badge-outline">Rating: 4.3</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* second one is right */}
            <div className="card w-96 bg-base-100 shadow-xl mb-10" data-aos="flip-right">
                <figure><img src={`https://i.ibb.co/zQVSy7f/maxresdefault.jpg`} alt="Action Toy" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Group Toy
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>You can find bunch of avenger</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Price: $550</div>
                        <div className="badge badge-outline">Rating: 4.8</div>
                    </div>
                </div>
            </div>

            {/* Third one is also left */}
            <div className="card w-96 bg-base-100 shadow-xl mb-10" data-aos="flip-up">
                <figure><img src={`https://i.ibb.co/X4mdb94/images.jpg`} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                       Captain America
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>You can have the super human</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Price : $524</div>
                        <div className="badge badge-outline">Rating : 4.9</div>
                    </div>
                </div>
            </div>

            {/* last one is also right */}
            <div className="card w-96 bg-base-100 shadow-xl mb-10" data-aos="flip-down">
                <figure><img src={`https://i.ibb.co/yhN7Fck/3.jpg`} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Thor Hammer
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>You can lift the hammer and have as many asgardian queen</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Price: $550</div>
                        <div className="badge badge-outline">Rating: 4.8</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AosData;