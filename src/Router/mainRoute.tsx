import {createBrowserRouter} from "react-router-dom"
import Layout from "../Components/Common/Layout"

export const mainRouter = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <></>
            }
        ]
    }
])