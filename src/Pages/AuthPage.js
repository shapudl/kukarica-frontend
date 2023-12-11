import React from "react";
import AuthForm from "../Components/AuthForm"
import { login } from "../Utils/http";
import { redirect } from "react-router";


export default function Auth(){

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
    console.log('afasdf');

    if (mode === "login") {
        const response = await fetch(
            "https://login-zazjbx7nka-uc.a.run.app/",
            {
                method: "POST", 
                headers: 
                {
                    "authId" : "OwqXLfHm5ATR8pgL4PC2y0PbuGu2",
                    "Content-type" : "application/json"
                },
                body: JSON.stringify(authData)
            });
    
    
        if (!response.ok) {
          throw new Error(`Error while trying to login`);
        }

        // save user id to local.storage 

        console.log(response.json)

        const responseData = await response.json(); 
        console.log(responseData);

        console.log(responseData.appUser.id);

        if (responseData.appUser.id) {
            localStorage.setItem("userId", responseData.appUser.id)
        }


        return redirect("/recipes")

    } else {
        // send create request
        // handle errors
        // redirect to login
    }


}