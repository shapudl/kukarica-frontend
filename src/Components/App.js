import React from "react";
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import { QueryClientProvider, QueryClient} from "react-query";
import "./App.scss";
import RootLayout from "../Pages/Layout/RootLayout";
import AuthPage from "../Pages/AuthPage";
import DashboardPage from "../Pages/Recipes/DashboardPage";
import RecipeDetailsPage from "../Pages/Recipes/RecipeDetailsPage";
import NotFoundPage from "../Pages/Error/NotFoundPage";


export default function App(){

    const queryClient = new QueryClient();

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Navigate to="/auth" replace />
        },
        { 
            path: "/auth",
            id: "auth",
            element: <RootLayout />,
            children: [
                { index: true, element: <AuthPage/>}
            ]
        },
        {
            path: "/recipes",
            id: "recipes",
            element: <RootLayout />,
            children: [
                { index: true, element: <DashboardPage/> },
                { path: ":id", element: <RecipeDetailsPage/> }
            ]
        },
        {
            path: "*",
            element: <NotFoundPage />,
        },
    ]);


    return(
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    )
}