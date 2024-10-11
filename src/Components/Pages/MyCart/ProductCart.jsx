import Swal from "sweetalert2";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdOutlinePayment } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProductCart = ({ cart, userCart, setUserCart }) => {

    const { _id, brandName, photo, price, productName, rating, type, email } = cart;

    const handleCartDelete = () => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://b8a10-brandshop-server-side-nazmul1211.vercel.app/userCart/${_id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log('data deleted successfully', data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Success!",
                                text: "Cart Deleted successfully.",
                                icon: "success"
                            });
                            const remainingUserCart = userCart.filter(e => e._id !== _id);
                            setUserCart(remainingUserCart);
                        }
                        // console.log('userCart', data);
                    })
            }
        });
    }

    const handlePayment = () => {
        Swal.fire({
            title: "Success!",
            text: "Payment successful!.",
            icon: "success"
        });
    }

    AOS.init();

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl border text-white"
                data-aos="fade-up"
                data-aos-anchor-placement="top-center">
                <figure><img className="md:w-40 pl-2 md:pl-0 " src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="text-lg md:text-xl font-bold">{productName}</h2>
                    <div className="flex justify-between">
                        <div className="text-[12px] md:text-[16px]">{brandName}</div>
                        <div className="text-[12px] md:text-[16px]"><span className="hidden md:inline">Type:</span> {type}</div>
                    </div>
                    <div className="flex justify-between text-[12px] md:text-[14px]">
                        <p>Price: {price}</p>
                        <p className="flex justify-end">Rating: {rating}</p>
                    </div>
                    <div className="flex md:card-actions gap-4 md:gap-8 justify-end">
                        <button onClick={handlePayment} className="md:btn p-2 md:px-3 rounded-m bg-teal-600 md:bg-none md:btn-success md:text-2xl text-white"><MdOutlinePayment></MdOutlinePayment></button>
                        <button onClick={handleCartDelete} className="md:btn p-2 md:px-3 rounded-m bg-teal-600 md:bg-none md:btn-success md:text-2xl text-white"><RiDeleteBin5Fill></RiDeleteBin5Fill></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;