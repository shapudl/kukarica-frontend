import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div centered={true}>
            <h1>Oops! You seem to be lost.</h1>
            <p>Find your way again</p>
            <Link to='/'>... ... ... WAY ... ... ... </Link>
        </div>
    )
}