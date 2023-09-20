import React from "react";
import Swal from "sweetalert2";

const ClientReview = () => {
  const handleReview = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const comment = form.comment.value;
    const review = {
      name,
      image,
      comment,
    };


    fetch(`https://toy-store-server-delta.vercel.app/addToysReview`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Review Added Successfully");
        }
      });
  };

  return (
    <div className="py-14 px-2">
      <h2 className="text-center text-2xl lg:text-4xl font-semibold py-7">
        If You Like Our Service Feel
        <br />
        <span className="text-yellow-500"> Free to Give a Review</span>
      </h2>

      <div className="grid grid-cols-1 justify-items-center justify-center md:grid-cols-3 gap-3">
        <div className="card w-96 h-64 bg-base-100  border">
          <figure className="px-10 py-10">
            <img
              src={`https://wallpaperaccess.com/full/13456.jpg`}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
        </div>

        <form onSubmit={handleReview}>
          <div className="card w-96 bg-base-100  border">
            <div className="card-body items-center text-center">
              <div className="form-control">
                <h2
                  className="card-title text-center mb-2
                                 mt-2 text-red-100"
                >
                  Fill Up the form
                </h2>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="url"
                  name="image"
                  placeholder="image"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">About Our Service</span>
                </label>
                <input
                  type="text"
                  name="comment"
                  placeholder="comment"
                  className="input input-bordered"
                  required
                />
              </div>

              <input className="btn btn-success" type="submit" value="Submit" />
            </div>
          </div>
        </form>

        <div className="card w-96 h-64 bg-base-100  border">
          <figure className="px-10 py-10">
            <img
              src={
                "https://w0.peakpx.com/wallpaper/323/76/HD-wallpaper-marvels-avengers-superheroes.jpg"
              }
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
        </div>

      </div>
    </div>
  );
};

export default ClientReview;
