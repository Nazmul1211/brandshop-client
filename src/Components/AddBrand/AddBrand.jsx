import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const AddBrand = () => {
    const handleAddBrands = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const logo = form.logo.value;

        const brand = {name, logo};

        fetch('https://b8a10-brandshop-server-side-nazmul1211.vercel.app/brands', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(brand)   
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                Swal.fire({
                  title: "Success!",
                  text: "Brand added successfully.",
                  icon: "success"
                });
              }
            // console.log('Brand name added in DB:', data);
            form.reset();
        })
    }
    return (
        // <div className="min-h-screen bg-[#A8D0E6]">
        <div className="min-h-screen bg-[#24305E]">
            <div className="pt-14 md:pt-32 px-6">
                <div className="bg-white w-full md:w-[620px] mx-auto pt-14 pb-10 rounded-md">
                    <h2 className="text-4xl text-black font-bold text-center">Add Brand</h2>
                    <form onSubmit={handleAddBrands} className="card-body w-full md:w-[573px] mx-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <input type="text" placeholder="Enter Brand" name="name" className="input input-bordered bg-gray-100 w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand Logo</span>
                            </label>
                            <input type="text" placeholder="Logo URL" name="logo" className="input input-bordered bg-gray-100 w-full" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="bg-blue-600 hover:bg-blue-800 py-2 text-white font-bold rounded-md text-lg ">Login</button>
                        </div>
                        <div>
                            <h2 className="mt-5 text-gray-600 text-[16px] font-bold">Branded listed already? <Link className="text-blue-600" to="/addProduct">Add Product</Link></h2>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBrand;