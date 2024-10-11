import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {

    const loader = useLoaderData();
    // console.log(loader);

    const { brandName, description, photo, price, productName, rating, type, _id } = loader;

    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
        const description = form.description.value;

        // console.log(productName, brandName, type, price, photo, rating, description);
        const updatedProduct = {
            productName,
            brandName,
            type,
            price,
            photo,
            rating,
            description
        }

        fetch(`https://b8a10-brandshop-server-side-nazmul1211.vercel.app/products /${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: "Success!",
                        text: "Product updated successfully.",
                        icon: "success"
                    });
                }
                // console.log("updated data responded from server is", data);
                form.reset();
            })

    }

    return (
        <div className="min-h-screen bg-[#24305E]">
            <div className="pt-32">
                <div className="bg-white w-full md:w-3/5 mx-auto  pt-14 pb-10 rounded-md">
                    <h2 className="text-4xl text-black font-bold text-center">Update Product</h2>
                    <form onSubmit={handleUpdateProduct} className="card-body w-full mx-auto">
                        {/* Row of product name and brand name */}
                        <div className="grid md:flex md:gap-10">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input type="text" placeholder="Enter Product Name" name="productName" defaultValue={productName} className="input input-bordered bg-gray-100 " required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <input type="text" placeholder="Enter Brand Name" name="brandName" defaultValue={brandName} className="input input-bordered bg-gray-100 " required />
                            </div>
                        </div>
                        {/* row of type and price */}
                        <div className="grid md:flex md:gap-10">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Type (Mobile, Laptop, Headphone etc)</span>
                                </label>
                                <input type="text" placeholder="Mobile, Laptop, Headphone etc" name="type" defaultValue={type} className="input input-bordered bg-gray-100" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" placeholder="Enter Price" name="price" defaultValue={price} className="input input-bordered bg-gray-100" required />
                            </div>
                        </div>
                        {/* row of image product and rating */}
                        <div className="grid md:flex md:gap-10 items-center">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Enter Image URL</span>
                                </label>
                                <input type="text" placeholder="Enter Image URL" name="photo" defaultValue={photo} className="input input-bordered bg-gray-100 w-full" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="number" placeholder="Rating out of 10" name="rating" className="input input-bordered bg-gray-100 w-full" required />
                            </div>
                        </div>

                        {/* row of short description */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <input type="text" placeholder="Enter Short Description" name="description" defaultValue={description} className="input input-bordered bg-gray-100 w-full py-10" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="bg-blue-600 hover:bg-blue-900 py-2 text-white font-bold rounded-md text-lg ">Update Product</button>
                        </div>
                        <div>
                            <h2 className="mt-5 text-gray-600 text-[16px] font-bold">Wanna add new product ? <Link className="text-blue-600" to="/addProduct">Add Product</Link></h2>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;