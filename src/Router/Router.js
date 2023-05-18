import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layout/Main";
import Login from "../Components/Login/Login";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            }
        ],
    }
])