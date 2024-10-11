import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authentication/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    const { signInUser, signInWithGoogle } = useContext(AuthContext);


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        // reset SetLoginError
        setLoginError("");

        // Login user with Email and Password
        signInUser(email, password)
            .then(result => {
                // console.log(result.user);
                if (result.user) {
                    Swal.fire({
                        title: "Success!",
                        text: "Login Successful.",
                        icon: "success"
                    });
                }
                form.reset();
                // navigate after login
                navigate(navigate?.state ? navigate.state : '/');
            })
            .catch(error => {
                console.error(error.message);
                if (error.message === 'Firebase: Error (auth/invalid-credential).') {
                    setLoginError('Email or password does not match. Check it.');
                }               
            })
    }

    const handleLoginWithGoogle = () => {
        // login with Google popup by firebase
        signInWithGoogle()
            .then(result => {
                // console.log(result.user);
                Swal.fire({
                    title: "Success!",
                    text: "Sign in Successfully.",
                    icon: "success"
                });
                navigate('/');
            })
            .catch(error => {
                console.error(error.message);
            })
    }

    return (
        <div className="min-h-screen bg-[#A8D0E6] px-4 md:px-0">
            <div className="max-w-6xl mx-auto pt-32">
                <div className="bg-white w-full md:w-[620px] mx-auto  pt-14 pb-10 rounded-md text-gray-600">
                    <h3 className="text-3xl font-bold text-center">Login Now</h3>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" className="input input-bordered bg-slate-100" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Password</span>
                            </label>
                            <div className="relative items-center">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    name="password"
                                    className="input input-bordered bg-slate-100 w-full" required />
                                <span className="text-xl font-bold absolute items-center top-3 right-2" onClick={() => { setShowPassword(!showPassword) }}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="py-2 rounded-md text-lg font-bold text-white bg-blue-600 hover:bg-blue-800">Login</button>
                        </div>
                        {
                            loginError && <h2 className="mt-5 text-red-600 font-bold">{loginError}</h2>
                        }
                        <div className="flex items-center justify-between mt-4">
                            <h2 className="text-xl font-bold my-4">Login with Google</h2>
                            <button onClick={() => handleLoginWithGoogle()} className="text-4xl text-blue-600 px-12 py-3 bg-blue-100 rounded-md"><FaGoogle></FaGoogle></button>
                        </div>
                        <div className="mt-5">
                            <p>Don't have an account? Please <Link to="/register" className="text-blue-600 font-bold">Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;