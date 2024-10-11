import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import AddBrand from "../AddBrand/AddBrand";
import BrandDetails from "../Pages/BrandDetails/BrandDetails";
import UpdateProduct from "../Pages/updateProduct/updateProduct";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://b8a10-brandshop-server-side-nazmul1211.vercel.app/brands')
            },
            {
                path: '/brand/:name/:id',
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-nazmul1211.vercel.app/products/${params.id}`)
            },
            {
                path: 'addBrand',
                element: <AddBrand></AddBrand>
            },
            {
                path: '/brand/:name',
                element: <BrandDetails></BrandDetails>,
                loader: () => fetch('https://b8a10-brandshop-server-side-nazmul1211.vercel.app/products')
            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/updateProduct/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-nazmul1211.vercel.app/products/${params.id}`)
            },
            {
                path: '/myCart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch('https://b8a10-brandshop-server-side-nazmul1211.vercel.app/userCart')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])