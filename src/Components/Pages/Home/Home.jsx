import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Brand from "../../Brand/Brand";
import ExtraInfo from "../../ExtraInfo/ExtraInfo";
import TopBrand from "./TopBrand";
import TopPhone from "./TopPhone";
import Banner from "./Banner";



const Home = () => {
    const loadedData = useLoaderData()
    const [brands, setBrands] = useState(loadedData);
    // console.log(loadedData);
    return (
        <div className="w-full md:max-w-6xl mx-auto px-4 md:px-0">

            {/* Banner section of the HomePage */}
            <div>
                <Banner></Banner>
            </div>

            {/* Top Brand and Top Phone section */}
            <div className="md:border rounded-2xl mt-10 md:mt-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-24">
                    <div className="col-span-2 border md:border-none rounded-tl-[140px]">
                        <TopBrand></TopBrand>
                    </div>
                    <div className="col-span-2 border md:border-none rounded-tr-[140px]">
                        <TopPhone></TopPhone>
                    </div>
                </div>
                <div className="bg-slate-700 rounded-br-2xl rounded-bl-2xl">
                    <h4 className="py-3 md:py-8 px-6 md:px-20 text-2xl font-bold text-white">According to the survey? </h4>
                </div>
            </div>

            {/* Six Brand Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-20 border px-5 md:px-20 py-20 rounded-tl-[130px] rounded-br-[140px] bg-slate-50">
                {
                    brands.map(brand => <Brand key={brand._id} brand={brand}></Brand>)
                }
            </div>

            {/* Helping Section contains extraInfo */}
            <div className="mt-10 md:mt-20 mb-10 md:mb-20">
                <ExtraInfo></ExtraInfo>
            </div>

        </div>
    );
};

export default Home;