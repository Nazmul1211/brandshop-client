import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


const TopPhone = () => {
    const [topPhone, setTopPhone] = useState("");
    useEffect(() => {
        fetch('https://b8a10-brandshop-server-side-nazmul1211.vercel.app/products/65a6b1a3e2ef10ee8ccb1190')
            .then(res => res.json())
            .then(data => {
                setTopPhone(data.photo);
            })
    }, [])

    // console.log(topPhone)

    AOS.init();

    return (
        <div className="py-10 md:py-20 px-4 md:px-10 ">
            <h2 className="px-3 py-1 flex mx-auto rounded-full bg-pink-600 text-xl text-white font-bold w-32 mb-14">Top Phone</h2>

            <div className="grid grid-cols-2 md:flex">
                <div className="w-full mt-8 md:mt-0" data-aos="zoom-in">
                    <img className="flex w-[180px] md:h-[230px] bg-slate-50 border" src={topPhone} alt="" />
                </div>

                <div className="space-y-2 p-5 mt-2 md:mt-0">
                    <div>
                        <h4 className="text-start text-lg md:text-xl font-bold text-teal-600">iPhone 15</h4>
                    </div>
                    <div className="flex gap-5 md:gap-10">
                        <button className="text-sm md:text-[16px] font-bold text-gray-600">Apple</button>
                        <div className="text-sm md:text-lg text-gray-600">Rating: 10</div>
                    </div>
                    <div className="flex gap-5 md:gap-10">
                        <p className="text-[16px] text-gray-600">Type: Mobile</p>
                        <p className="text-[16px] text-gray-600">$999</p>
                    </div>

                    <div className="flex">
                        <Link to={`/brand/Apple/65a6b1a3e2ef10ee8ccb1190`}>
                            <button className="py-1 px-4 bg-blue-600 hover:bg-blue-700 text-[16px] hover:font-bold text-white rounded-md">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopPhone;