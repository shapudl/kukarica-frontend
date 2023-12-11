import { redirect } from "react-router";

export function action() {
    localStorage.removeItem("userId");

    return redirect("/");
}