import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
    const navigate = useNavigate();
    const {createUser, signInWithGoogle} = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photo,email,password);

        setErrorMessage('');
       
        const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if(!regex.test(password)){
            setErrorMessage('At least one uppercase, one lowercase and must be 6 characters or longer');
            return;
        }

        
        createUser(email,password)
        .then(result =>{
            console.log(result.user);
            Swal.fire({
                title: 'Success!',
                text: 'User added successfully',
                icon: 'success',
                confirmButtonText: 'Ok'
            });
           
        
        updateProfile(result.user,
            {
                displayName: name,
                photoURL: photo
            })
            .then(() => {
                console.log('user profile updated');
                Swal.fire('Profile update Successful');
                navigate('/');
                e.target.reset();
            })
            .catch(error => console.log('User profile update error'));  
    })
    .catch(error => 
    toast.error('User registration unsuccessful')
);
};

const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(result =>{
        console.log(result.user);
        navigate('/');
    })
    .catch(error => console.log('ERROR',error.message));
}




    return (
        <div className="hero bg-base-100 min-h-screen mb-12">
            <div className="hero-content max-w-[400px] w-[760px] mx-auto flex-col px-6">
                <div className="text-center lg:text-left">
                    <h3 className="text-3xl font-bold">Register now!</h3>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Password</span>
                            </label>
                            <input type="password" name="password"
                                placeholder="password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-sky-800 text-lg h-[60px] font-semibold text-white">Register</button>
                        </div>
                    </form>

                    {
                        errorMessage && <p className="text-red-600 ml-4 mb-4">{errorMessage}</p>
                    }
                   
                    <p className="ml-8 mb-8 font-semibold">
                        Already have an account? please <Link className="text-blue-500" to="/login">Login</Link>
                    </p>

                    <p className="text-center mb-6">
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary">Google</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;