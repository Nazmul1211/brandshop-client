import { PiShoppingCartThin } from "react-icons/pi";
import { SlQuestion } from "react-icons/sl";
import { BiMessageDetail } from "react-icons/bi";

import { Link } from "react-router-dom";


const ExtraInfo = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Link>
                <div className="border px-4 py-6 text-gray-600 hover:bg-slate-50">
                    <span ><PiShoppingCartThin className="text-4xl font-extrabold"></PiShoppingCartThin></span>
                    <h4 className="text-xl mt-2">HOW TO SHOP?</h4>
                    <p className="text-[16px] mt-1">Your guide to shopping and placing orders</p>
                </div>
            </Link>
            <Link>
                <div className="border px-4 py-6 text-gray-600 hover:bg-slate-50">
                    <span ><SlQuestion className="text-3xl font-extrabold"></SlQuestion></span>
                    <h4 className="text-xl mt-2">FAQS</h4>
                    <p className="text-[16px] mt-1">Your questions answered</p>
                </div>
            </Link>
            <Link>
                <div className="border px-4 py-6 text-gray-600 hover:bg-slate-50">
                    <span ><BiMessageDetail className="text-3xl font-extrabold"></BiMessageDetail></span>
                    <h4 className="text-xl mt-2">NEED HELP?</h4>
                    <p className="text-[16px] mt-1">Contact out global customer service team</p>
                </div>
            </Link>
        </div>
    );
};

export default ExtraInfo;