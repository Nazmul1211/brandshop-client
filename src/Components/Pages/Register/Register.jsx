import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authentication/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [registerError, setRegisterError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, email, password);

        // Reset registrationError and passwordError
        setRegisterError('');
        setPasswordError('');

        // Password validation 
        if (password.length < 6) {
            setPasswordError('Password must be at least 6 character.');
            return;
        }
        else if (!password.match(/[A-Z]/)) {
            setPasswordError('Password must have one Uppercase letter.');
            return;
        }
        else if (!password.match(/[0-9]/)) {
            setPasswordError('Password must have one number');
            return;
        }

        // creating user with firebase
        createUser(email, password)
            .then(result => {
                // console.log(result.user);
                form.reset();
                navigate('/');
                if (result.user) {
                    Swal.fire({
                        title: "Success!",
                        text: "Registration Successful.",
                        icon: "success"
                    });
                }
            })
            .catch(error => {
                console.error(error.message);
                if (error.message === "Firebase: Error (auth/email-already-in-use).") {
                    // setRegisterError("This user is already exist. Please use another Email.");
                }
            });
    }
    return (
        <div className="min-h-screen bg-[#A8D0E6] px-4 md:px-0">
            <div className="max-w-6xl mx-auto pt-32">
                <div className="bg-white w-full md:w-[620px] mx-auto  pt-14 pb-10 rounded-md text-gray-600">
                    <h3 className="text-3xl font-bold text-center">Register Now</h3>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered bg-slate-100" required />
                        </div>
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
                            <button className="py-2 rounded-md text-lg font-bold text-white bg-blue-600 hover:bg-blue-800">Register</button>
                        </div>
                        {
                            registerError && <h2 className="mt-5 text-red-600 font-bold">{registerError}</h2>
                        }
                        {
                            passwordError && <h2 className="mt-5 text-red-600 font-bold">{passwordError}</h2>
                        }
                        <div className="mt-5">
                            <p>Already have an account ? Please <Link to="/login" className="text-blue-600 font-bold">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;