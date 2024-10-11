import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";


const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar></Navbar>
            <div className="w-full md:max-w-[500px] mx-auto bg-[#24305E] rounded-md mt-20 md:mt-36 ">
                <h2 className="text-5xl text-white font-bold py-4 text-center ">404</h2>
                <h4 className="text-gray-200 font-bold text-3xl text-center py-10">Sorry, Page Not Found</h4>
            </div>
            <div className="bottom-0 fixed w-full">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ErrorPage;