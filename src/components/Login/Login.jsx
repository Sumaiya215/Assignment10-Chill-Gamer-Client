import { useContext, useRef, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import loginData from '../../assets/lottie/login.json'
import Lottie from "lottie-react";

const Login = () => {
    const navigate = useNavigate();
    const {signInUser, signInWithGoogle} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const emailRef = useRef();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);

        setLoginError('');

        signInUser(email,password)
        .then(result => {
            console.log(result.user);
            e.target.reset();
            navigate('/');
        })
        .catch(error => {
            console.log('ERROR', error.message);
            setLoginError(error.message);
        })
        
    }

    const handleGoogleSignIn =() =>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user);
            navigate('/');
        })
        .catch(error => console.log('ERROR', error.message));
    }

    return (
        <div className="hero bg-base-100 min-h-screen mx">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-[600px]">
                  <Lottie animationData={loginData}></Lottie> 
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h3 className="text-3xl font-bold text-center mt-3">Login now!</h3>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Email</span>
                            </label>
                            <input type="email" name="email" ref={emailRef} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-4">
                            <button type="submit" className="btn bg-sky-800 text-lg h-[60px] font-semibold text-white">Login</button>
                        </div>
                    </form>
                    <p className="ml-8 mb-4 font-semibold">
                        New to this website? please <Link className="text-blue-500" to="/register">Register</Link>
                    </p>

                    {
                        loginError && <p className="ml-8 mb-4 text-red-600">{loginError}</p>
                    }
                    <p className="text-center mb-6">
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary">Google</button>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Login;