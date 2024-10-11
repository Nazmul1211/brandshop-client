import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";
import Swal from "sweetalert2";
import { CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import './navLink.css'


const Navbar = () => {
    const { user, logOut, setUser } = useContext(AuthContext);
    const [isOpen, setInOpen] = useState(false);

    const toggleNavbar = () => {
        setInOpen(!isOpen);
    }

    const handleLogout = () => {
        logOut()
            .then(() => {
                // console.log('user successfully sign out');
                setUser(null);
                Swal.fire({
                    title: "Success!",
                    text: "Logged Out Successful.",
                    icon: "success"
                });
            })
            .catch(error => {
                // console.log(error.message);
            })
    }

    return (
        <div className="max-w-6xl mx-auto px-4 md:px-0 ">
            <div className="flex justify-between items-center text-black py-4 font-bold">
                <div>
                    <Link to="/" className=" text-3xl md:text-5xl text-black font-extrabold">BRAND SHOP</Link>
                </div>

                <div>
                    <nav className="hidden md:flex gap-6 text-lg">
                        <NavLink className=" hover:text-pink-600" to="/">Home</NavLink>
                        <NavLink className="hover:text-pink-600" to="/addProduct">Add Product</NavLink>
                        <NavLink className="hover:text-pink-600" to="/myCart">My Cart</NavLink>

                        <div className="">
                            {
                                user ? <div className="flex gap-4">
                                    {user.displayName && <span className="font-bold hidden md:block px-2 py-1 text-teal-600 rounded-md outline outline-1 bg-blue-100 my-auto">{user.displayName}</span>}
                                    <Link onClick={handleLogout} className=" font-bold px-2 py-1 text-white rounded-md outline outline-1 bg-pink-600 hover:bg-pink-700 my-auto">Logout</Link>
                                    {user.photoURL ? <img className="w-9 h-9 rounded-md" src={user.photoURL}></img> : <CgProfile className="text-4xl text-green-700"></CgProfile>}
                                </div>
                                    : <NavLink to="/login" className=" font-bold">Login</NavLink>
                            }
                        </div>
                    </nav>

                    <div className="md:hidden">
                        <button className="mr-0 text-2xl flex flex-end" onClick={toggleNavbar}>
                            {isOpen ? <div>X</div> : <IoMenu className="text-2xl"></IoMenu>}
                        </button>
                    </div>
                </div>
            </div>

            <div>
                {isOpen &&
                    <nav className="flex flex-col text-lg my-6 space-y-2 text-gray-600 font-bold duration-500">
                        <button className="hover:text-pink-600 flex justify-start"><NavLink  to="/">Home</NavLink></button>
                        <button className="hover:text-pink-600 flex justify-start"><NavLink to="/addProduct">Add Product</NavLink></button>
                        <button className="hover:text-pink-600 flex justify-start"><NavLink to="/myCart">My Cart</NavLink></button>

                        <div className="">
                            {
                                user ? <div className="flex gap-4">
                                    {user.displayName && <span className="font-bold hidden md:block px-2 py-1 text-teal-600 rounded-md outline outline-1 bg-blue-100 my-auto">{user.displayName}</span>}
                                    <Link onClick={handleLogout} className="font-bold px-2 py-1 text-white rounded-md outline outline-1 bg-pink-600 hover:bg-pink-700 my-auto">Logout</Link>
                                    {user.photoURL ? <img className="w-9 h-9 rounded-md" src={user.photoURL}></img> : <CgProfile className="text-4xl text-green-700"></CgProfile>}
                                </div>
                                    : <NavLink to="/login" className=" font-bold">Login</NavLink>
                            }
                        </div>
                    </nav>
                }
            </div>
        </div>
    );
};

export default Navbar;