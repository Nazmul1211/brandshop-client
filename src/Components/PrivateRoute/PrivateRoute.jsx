import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { Link, Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="grid mt-10 md:mt-20 justify-center"> 
            <span className="loading loading-infinity loading-lg mx-10"></span>
            <div className="mt-10 space-y-4">
                <Link className="text-white font-bold px-3 py-1 bg-teal-600 rounded-md hover:bg-teal-700 block" to="/login">Please Login</Link>
                <Link className="text-white font-bold px-3 py-1 bg-teal-600 rounded-md hover:bg-teal-700 block" to="/register">or Register</Link>
            </div>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login" />;

};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}