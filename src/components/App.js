import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import RootLayout from "../pages/Root";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";

export default function App(){

    const router = createBrowserRouter([
        { path: "/",
            element: <RootLayout />,
            children: [
                { index: true, element: <HomePage/> },
                { path: "about", element: <AboutPage/>}
            ]
        }
    ]);


    return(
        <RouterProvider router={router} />
    )
}