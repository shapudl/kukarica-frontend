import React from "react";
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import { QueryClientProvider, QueryClient} from "react-query";
import RootLayout from "../Pages/Layout/RootLayout";
import AuthPage, {action as authAction} from "../Pages/AuthPage";
import { action as logoutAction } from "../Pages/LogoutPage";
import DashboardPage from "../Pages/Recipes/DashboardPage";
import RecipeDetailsPage from "../Pages/Recipes/RecipeDetailsPage";
import NotFoundPage from "../Pages/Error/NotFoundPage";
import GlobalStyles from '../Styles/GlobalStyles';


export default function App(){

    const queryClient = new QueryClient();

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Navigate to="/auth?mode=login" replace />
        },
        { 
            path: "/auth",
            id: "auth",
            element: <RootLayout />,
            children: [
                { index: true, element: <AuthPage/>, action: authAction}
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
            path: "/logout",
            action: logoutAction
        },
        {
            path: "*",
            element: <NotFoundPage />,
        },
    ]);


    return(
        <QueryClientProvider client={queryClient}>
            <GlobalStyles />
            <RouterProvider router={router} /> 
        </QueryClientProvider>
    )
}