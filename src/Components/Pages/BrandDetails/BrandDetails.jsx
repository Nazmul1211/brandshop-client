import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Product from "../Product/Product";
import BrandSlider from "./Brandslider";
import AOS from 'aos';
import 'aos/dist/aos.css';

const BrandDetails = () => {
    const loadedData = useLoaderData();
    const [products, setProducts] = useState(loadedData);
    const [brandSpecProduct, setBrandSpecProduct] = useState([]);
    const params = useParams();
    // console.log(params);
    const { name } = params;

    useEffect(() => {
        const brandDataFilter = products && products.filter(e => e.brandName === name);
        setBrandSpecProduct(brandDataFilter);
    }, [products])

    // console.log(brandSpecProduct);


    AOS.init();

    return (
        <div className="my-20 max-w-6xl mx-auto px-4 md:px-0">
            <h2 className="text-6xl text-gray-600 font-bold text-center py-3 shadow-blue-600 mb-10 md:mb-14">{name}</h2>
            <div className="mb-10 md:mb-16">
                {brandSpecProduct.length !== 0 && <BrandSlider></BrandSlider>}
            </div>
            <div data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
                {
                    brandSpecProduct.length === 0 &&
                    <div className="w-full md:max-w-[500px] mx-auto bg-[#24305E] rounded-md">
                        <h2 className="text-5xl text-white font-bold py-4 text-center ">Opsss!</h2>
                        <h4 className="text-gray-200 font-bold text-3xl text-center py-10">No, Product available for this Brand</h4>
                    </div>
                }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {
                    brandSpecProduct.map(product => <Product key={product._id} product={product} name={name}></Product>)
                }
            </div>
        </div>
    );
};

export default BrandDetails;