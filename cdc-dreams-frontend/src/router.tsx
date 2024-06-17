import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Notfound from "./pages/Notfound";
import Defaultlayout from "./components/Defaultlayout";
import Guestlayout from "./components/Guestlayout";
import Users from "./pages/Users";


const routes = [
    {
        path: "/",
        element: <Defaultlayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="./users"/>,
            },
            {
                path: "/users",
                element: <Users />,
            },
        ],
    },

    {
        path: "/",
        element: <Guestlayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
        ],
    },

    {
        path: "*",
        element: <Notfound />,
    },
];
const router = createBrowserRouter(routes)

export default router;