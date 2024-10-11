import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Brand = ({ brand }) => {
    const { _id, name, logo } = brand;
    // console.log(_id, name, logo);

    AOS.init();
    return (
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <div className="p-4 w-full bg-white border rounded-md">
                <img className="md:max-w-[220px] lg:max-w-[250px h-[120px] flex mx-auto" src={logo} alt={name} />
                <Link to={`/brand/${name}`}>
                    <h4 className="text-2xl text-white bg-slate-500 hover:bg-slate-600 text-center py-1 font-bold rounded-md mt-4">{name}</h4>
                </Link>
            </div>
        </div>
    );
};

export default Brand;