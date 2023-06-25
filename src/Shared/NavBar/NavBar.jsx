import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import logo from '../../assets/logo.png'

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                // console.log(error);
            })

    }
    const navLink = <>
        <li><Link to='/'>Home</Link></li>


        <li><Link to='/allToys'>All Toys</Link></li>
        {
            user && <li><Link to='/myToys'>My Toys</Link></li>
        }
        <li><Link to='/addToys'>Add A Toy</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>

    </>

    return (
        <div className="navbar bg-base-100 h-28 mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /></Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>

            <div className="navbar-end">
                {
                    (user?.email) ? <>
                        <button className='btn btn-warning' onClick={handleLogOut}>Log Out</button>
                        <div className="avatar online">
                            <div className="w-20 rounded-full">
                                <img src={user.photoURL} title={user.displayName} />
                            </div>
                        </div>

                    </>
                        :
                        <button className='btn btn-primary '><Link to='/login'>Login</Link></button>
                }

            </div>
        </div>
    );
};

export default NavBar;