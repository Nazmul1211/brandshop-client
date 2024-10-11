import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const TopBrand = () => {
    const [brands, setBrands] = useState([])
    const [logo, setLogo] = useState("");

    useEffect(() => {
        fetch('https://b8a10-brandshop-server-side-nazmul1211.vercel.app/brands', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setBrands(data);

                const topBrand = data.find(e => e._id === "65a76084f036925cd91e3801");
                setLogo(topBrand.logo);
            })
            .catch(error => {
                // console.log(error.message);
            })
    }, []);
    // console.log(logo);


    AOS.init();

    return (
        <div className="py-10 md:py-20 px-4 md:px-10">
            <div className="md:ml-36">
                <h2 className="flex mx-auto px-3 py-1 rounded-full bg-pink-600 text-xl text-white font-bold w-32 mb-14">Top Brand</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-10 items-center">
                <div data-aos="zoom-in">
                    <img className="w-52 md:w-72  px-6 md:px-11 py-4 md:py-8 mx-auto md:mx-0 border rounded-full" src={logo} alt="" />
                </div>
                <div className="grid md:w-2/5">
                    <div className="">
                        <div>
                            <div className="text-xl md:text-3xl text-gray-600 flex justify-between">
                                <h3 className="font-bold">Fame</h3>
                                <p className="font-extrabold">98%</p>
                            </div>
                            <progress className="progress progress-error w-56 md:w-64" value="100" max="100"></progress>
                        </div>
                        <div>
                            <div className="md:text-xl text-gray-600 flex justify-between">
                                <h3 className="font-bold">Popularity</h3>
                                <p className="font-extrabold">68%</p>
                            </div>
                            <progress className="progress progress-error w-56 md:w-64" value="68" max="100"></progress>
                        </div>
                        <div>
                            <div className="md:text-xl text-gray-600 flex justify-between">
                                <h3 className="font-bold">Disliked By</h3>
                                <p className="font-extrabold">15%</p>
                            </div>
                            <progress className="progress progress-error w-56 md:w-64" value="15" max="100"></progress>
                        </div>
                        <div>
                            <div className="md:text-xl text-gray-600 flex justify-between">
                                <h3 className="font-bold">Nutral</h3>
                                <p className="font-extrabold">15%</p>
                            </div>
                            <progress className="progress progress-error w-56 md:w-64" value="15" max="100"></progress>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBrand;