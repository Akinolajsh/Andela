import {createBrowserRouter} from "react-router-dom"
import Layout from "../Components/Common/Layout"
import Technology from "../Pages/Technology"
import LandingPage from "../Pages/LandingPage"
import Enterprise from "../Pages/Enterprise"

export const mainRouter = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <LandingPage/>
            },
            {
                index: true,
                path: "technology",
                element: <Technology/>
            },
            {
                index: true,
                path: "enterprise",
                element: <Enterprise/>
            },
        ]
    }
])