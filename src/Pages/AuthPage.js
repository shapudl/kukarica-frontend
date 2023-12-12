import React from "react";
import AuthForm from "../Components/AuthForm"
import { login, createUser } from "../Utils/http";
import { redirect } from "react-router";


export default function AuthPage(){

    return (
        <div className="app">
            <AuthForm />
        </div>
    )
}

export async function action({request}) {

    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get("mode") || "login";

    const data = await request.formData();
    
    const authData = {
        email: data.get("email"),
        password: data.get("password")
    }

    console.log(authData);

    if (mode === "login") {
        
        const responseData = await login(authData); 

        if (responseData.appUser.id) {
            localStorage.setItem("userId", responseData.appUser.id)
        }

        return redirect("/recipes")

    } else if (mode === "signup"){

        const createData = { ...authData, name: data.get("name") }
        console.log(createData);

        // send create request
        const response = await createUser(createData);

        // redirect to login
        return redirect("/")
    } else {

        throw new Error('Invalid user input');
    }



}