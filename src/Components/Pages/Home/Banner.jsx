import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    AOS.init();
    return (

        <div className="mt-10 md:mt-20 px-4 md:px-0">
            <div>
                <h3 className="text-4xl text-purple-500 text-center font-bold">eXPLORE😀</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 border gap-[1px] mt-6 md:mt-10">
                <div data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <img src="https://i.postimg.cc/yN07GFtb/Apple-Watch-Series-9-3-6716.jpg" alt="" />
                    <div className="bg-slate-700 text-white font-bold text-[18px] py-2 md:py-4 px-2 md:px-4 text-center border shadow-lg">
                        <h4>Apple Watch 9 Series <span className="text-pink-400">Latest!</span></h4>
                    </div>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <img src="https://i.postimg.cc/N0NS0F3x/Xiaomi-Buds-4-Pro-Gold-6162.jpg" alt="" />
                    <div className="bg-slate-700 text-white font-bold text-[18px] py-2 md:py-4 px-2 md:px-4 text-center border shadow-lg">
                        <h4>Xiaomi Buds 4 Pro <span className="text-pink-400">Latest!</span></h4>
                    </div>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <img src="https://i.postimg.cc/C5dqVPjN/Porcelain-7503.jpg" alt="" />
                    <div className="bg-slate-700 text-white font-bold text-[18px] py-2 md:py-4 px-2 md:px-4 text-center border shadow-lg">
                        <h4>Google Pixel Buds Pro <span className="text-pink-400">Latest!</span></h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;