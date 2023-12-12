import { redirect } from "react-router";

export function checkAuthLoader(){
    const token = getAuthToken();

    if (!token) {
        return redirect("/");
    }

    return null;

}

export function tokenLoader(){
    return getAuthToken();
}

export function getAuthToken(){
    return localStorage.getItem("userId");
}