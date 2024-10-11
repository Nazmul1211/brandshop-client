import { Link, useLoaderData } from "react-router-dom";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdBrandingWatermark } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { MdTypeSpecimen } from "react-icons/md";
import { FcRating } from "react-icons/fc";
import './ProductDetails.css'
import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
import Swal from "sweetalert2";

const ProductDetails = () => {
    const loader = useLoaderData();
    const { brandName, description, photo, price, productName, rating, type, _id } = loader;

    const { user } = useContext(AuthContext);
    const email = user.email;

    // console.log(loader);

    const userCart = {
        brandName,
        photo,
        price,
        productName,
        rating,
        type,
        email
    }


    const handleUserCart = () => {
        fetch('https://b8a10-brandshop-server-side-nazmul1211.vercel.app/userCart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userCart)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                      title: "Success!",
                      text: "Cart added successfully.",
                      icon: "success"
                    });
                  }
                // console.log('userCart', data);
            })
    }


    return (
        <div className="max-w-6xl mx-auto px-4 md:px-0">
            <div className='rounded-lg'>
                <div className=''>
                    <h2 className='grid justify-center text-[40px] font-bold mb-6 mt-14 text-blue-600 bg-slate-50 rounded-md shadow-lg px-2 py-1'>{productName}</h2>
                </div>

                <div className=''>
                    <div className="flex flex-col lg:flex-row gap-10 mb-10">
                        <div className='relative'>
                            <img className='image max-h-[700px] w-full rounded-lg' src={photo} alt="" />
                            <div className='absolute bottom-[-40px] mx-5 my-4 bg-blue-600 hover:bg-blue-800 hover:font-bold px-4 py-2 rounded-md'>
                                <Link onClick={handleUserCart}><button className='text-white text-2xl'>Add to Cart</button></Link>
                            </div>
                        </div>
                        {/* Turf features Table */}
                        <div className='border rounded-lg p-6 text-black flex flex-1 justify-center items-center bg-white'>
                            <div className="overflow-x-auto">
                                <table className="table flex border rounded border-black">
                                    {/* head */}
                                    <thead className='text-gray-600 text-sm'>
                                        <tr>
                                            <th>About</th>
                                            <th>Info</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="text-2xl ">
                                                        <FaProductHunt />
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">Product Name</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {productName}
                                            </td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="text-2xl ">
                                                        <MdBrandingWatermark />
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">Brand Name</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {brandName}
                                            </td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="text-2xl ">
                                                        <MdTypeSpecimen></MdTypeSpecimen>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">Product Type</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {type}
                                            </td>
                                        </tr>
                                        {/* row 4 */}
                                        <tr>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="text-2xl ">
                                                        <FcRating></FcRating>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">Rating</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {rating ? rating : ''}
                                            </td>
                                        </tr>
                                        {/* row 5 */}
                                        <tr>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="text-2xl ">
                                                        <BiMoneyWithdraw />
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">Pricing</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                $ {price}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mb-20">
                    <h4 className='text-3xl font-bold text-gray-600 mt-14 mb-6'>About <span className="text-blue-600">{productName}</span></h4>
                    <p className="text-gray-600 text-lg">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;