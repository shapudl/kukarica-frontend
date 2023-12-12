import React from "react";
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import { QueryClientProvider, QueryClient} from "react-query";
import RootLayout from "../Pages/Layout/RootLayout";
import AuthPage, {action as authAction} from "../Pages/AuthPage";
import { action as logoutAction } from "../Pages/LogoutPage";
import RecipeDetailsPage from "../Pages/Recipes/RecipeDetailsPage";
import RecipesListPage from "../Pages/Recipes/RecipesListPage";
import NotFoundPage from "../Pages/Error/NotFoundPage";
import GlobalStyles from '../Styles/GlobalStyles';
import { checkAuthLoader, tokenLoader } from "../Utils/auth";
import RecipesLayout from "../Pages/Layout/RecipesLayout";


export default function App(){

    const queryClient = new QueryClient();

    const router = createBrowserRouter([
        {
            path: "/",
            id: "root",
            loader: tokenLoader,
            element: <RootLayout />,
            children: [
                { 
                    index: true,
                    id: "auth",
                    element: <AuthPage />,
                    action: authAction
                },
                {
                    path: "/recipes",
                    id: "recipes",
                    element: <RecipesLayout />,
                    loader: checkAuthLoader,
                    children: [
                        { index: true, element: <RecipesListPage/> },
                        { path: "/recipes/:id", element: <RecipeDetailsPage/> }
                    ]
                },
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