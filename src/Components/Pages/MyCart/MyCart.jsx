import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCart from "./productCart";
import { AuthContext } from "../../Authentication/AuthProvider";


const MyCart = () => {
    const loader = useLoaderData();
    // console.log(loader);
    const [userCart, setUserCart] = useState([]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        const filteredUserCart = loader.filter(e => e.email === user.email);
        setUserCart(filteredUserCart);
    }, [loader])
    return (
        <div className="max-w-6xl min-h-screen my-20 mx-auto px-4 md:px-0">
            <h2 className="text-5xl text-gray-600 font-bold text-center">Your Carts</h2>
            <div className="bg-slate-50 p-4 md:p-8 border rounded-2xl mt-14 md:mt-20 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {
                        userCart.map(cart => <ProductCart key={cart.email} cart={cart} userCart={userCart} setUserCart={setUserCart}></ProductCart>)
                    }
                </div>
                <div>
                    {
                        userCart.length === 0 && <div>
                            <h2 className="text-3xl text-center text-gray-600 font-bold">No Cart Added Yet! Happy Shopping -_-</h2>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default MyCart;