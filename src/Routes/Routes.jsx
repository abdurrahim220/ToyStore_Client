import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllToys from "../Page/AllToys/AllToys";
import MyToys from "../Page/MyToys/MyToys";
import AddToys from "../Page/AddToys/AddToys";
import Blogs from "../Page/Blogs/Blogs";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import UpdateToys from "../Page/UpadateToys/UpdateToys";
import SingleToyDetails from "../Page/SingleToyDetails/SingleToyDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
            ,
            {
                path: '/register',
                element: <Register></Register>
            }
            ,
            {
                path: '/allToys',
                element: <AllToys></AllToys>,
             
            },
            {
                path: '/myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: '/addToys',
                element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
            },
            {
                path:'/toyDetails/:id',
                element:<PrivateRoute><SingleToyDetails></SingleToyDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://toy-store-server-delta.vercel.app/singleToy/${params.id}`)
            }
            ,
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/updateToys/:id',
                element: <PrivateRoute><UpdateToys></UpdateToys></PrivateRoute>
            }
        ]
    }
])

export default router;