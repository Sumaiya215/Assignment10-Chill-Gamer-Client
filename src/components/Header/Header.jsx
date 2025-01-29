import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.avif'
import './Header.css'
import { AuthContext } from '../Providers/AuthProvider';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip as ReactTooltip} from 'react-tooltip';

const Header = () => {
    const [theme, setTheme] = useState('light');
    const { user , signOutUser} = useContext(AuthContext);
    console.log(user);

    const handleSignOut = () =>{
        signOutUser()
        .then(() =>{
            console.log('user sign out successfully')
        })
        .catch(error => console.log('ERROR', error.message))
    }

    const toggleTheme = () => {
        const newTheme = theme === 'light'?'dark':'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme )
    }

    const links = <>
        <li className="font-bold mr-2 "><NavLink to="/">Home</NavLink></li>
        <li className="font-bold mr-2 "><NavLink to="/allReviews">All Reviews</NavLink></li>
        
        {
            user && <>
                <li className="font-bold mr-2 "><NavLink to="/addReview">Add Review</NavLink></li>
                <li className="font-bold mr-2 "><NavLink to="/myReviews">My Reviews</NavLink></li>
                <li className="font-bold mr-2 "><NavLink to="/myWatchList">Game WatchList</NavLink></li>
            </>
        }



    </>

    return (
        <div className="navbar max-w-[1200px] mx-auto bg-sky-800 text-white rounded-lg my-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-sky-800 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>

                <img className="w-[30px] rounded-full ml-3" src={logo} alt="" />
                <span className='text-white font-bold text-xl ml-2'>Chill Gamer</span>
                <button className='btn btn-xs ml-2' 
                onClick={toggleTheme}>
                        {
                            theme ==="light"? "light": "dark"
                        }
                    </button>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <div className='relative flex items-center'>
                            <img className="w-[40px] h-[40px] rounded-full cursor-pointer mr-3" src={user?.photoURL} alt="user" 
                                referrerPolicy="no-referrer"
                                 data-tooltip-id="userTooltip" />
                              
                                <ReactTooltip id="userTooltip" 
                                place='bottom' type="dark" effect="solid" content={user?.displayName}> 
                                </ReactTooltip></div>
                            <a onClick={handleSignOut} className="btn mx-3">Log Out</a>
                        </>
                        :
                        <>
                            <Link to="/login" className="btn mr-3"> Login</Link>
                            <Link to="/register" className="btn mr-3"> Register</Link>
                        </>
                }

            </div>
        </div>

    );
};

export default Header;
