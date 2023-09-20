
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';




const Register = () => {

    const { createUser, updateUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const [err, setErr] = useState("");
    const passwordValidation = (event) => {
        const password = event.target.value;

        if (password.length > 0) {
            if (password.length < 6) {
                setErr("Your password should be at least 6 character long.");
                return;
            } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
                setErr("Your password should be at least one special character.");
                return;
            } else if (!/(?=.*[A-Z])(?=.*[a-z])/.test(password)) {
                setErr(
                    "Your password should be at least one upper and lower case letter."
                );
                return;
            } else if (!/(?=.*\d)/.test(password)) {
                setErr("Your password should be at least one digit.");
                return;
            } else {
                setErr("");
                return;
            }
        } else {
            setErr("");
            return;
        }
    };

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const user = {
            name, email, password, photo
        }
        console.log(user);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                updateUser(name, photo)
                    .then(result => {
                        const user = result.user;
                        // console.log(user);
                        console.log('Update log profile');
                    })
                    .then(error => {
                        // console.log(error);
                    })
                form.reset();
                navigate(from, { replace: true })
            })

            .catch(error => {
                // console.log(error);
            })




    }

    return (
        <div>
            <div className="hero min-h-screen rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">


                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm border">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold">SignUp now!</h1>
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name='name' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <label className='label'>
                                        <span className='text-danger'>{err}</span>
                                    </label>
                                    <input type="text" name='password' onChange={passwordValidation} placeholder="password" className="input input-bordered" />

                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="url" name='photo' placeholder="photo" className="input input-bordered" />
                                </div>

                                <div className="form-control mt-6">
                                    <label className="label">
                                        <Link to='/login' className="label-text-alt link link-hover">Already Register to ToyStore</Link>
                                    </label>
                                    <input type="submit" value="Register" className="btn btn-primary" />
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;