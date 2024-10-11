import { Link } from "react-router-dom";

const Product = ({ product, name }) => {
    const { brandName, description, photo, price, productName, rating, type, _id } = product;
    // console.log(product);
    // console.log(name, typeof (name));
    return (
        <div className="max-h-screen">
            {
                <div>
                    <img className="flex items-center w-[285px] h-[350px] bg-slate-50 border" src={photo} alt="" />
                    <div className="space-y-2 border items-center max-w-[285px] p-5 mt-2">
                        <div className="flex justify-between items-center">
                            <h4 className="text-xl font-bold text-teal-600">{productName}</h4>
                        </div>
                        <div className="flex justify-between items-center">
                            <h4 className="text-[16px] font-bold text-gray-600">{brandName}</h4>
                            <div className="text-lg text-gray-600">Rating: {rating}</div>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-lg text-gray-600">Type: {type}</p>
                            <p className="text-lg text-gray-600">Price: ${price}</p>
                        </div>

                        

                        <div className="flex justify-between">
                            <Link to={`/brand/${name}/${_id}`}>
                                <button className="py-1 px-4 bg-blue-600 hover:bg-blue-700 text-[16px] hover:font-bold text-white rounded-md">Details</button>
                            </Link>
                            <Link to={`/updateProduct/${_id}`}>
                                <button className="py-1 px-4 bg-blue-600 hover:bg-blue-700 text-[16px] hover:font-bold text-white rounded-md">Update</button>
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Product;