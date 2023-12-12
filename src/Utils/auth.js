export function checkAuthLoader(){
    const token = getAuthToken();

    if (!token) {
        return redirect("/auth");
    }

    return null;

}

export function getAuthToken(){
    return localStorage.getItem("userId");
}