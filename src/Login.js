import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
    return (
        <div className="login">
            {/* Spotify logo */}
            <img
                src="http://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="spotify"
            />

            {/* login with sporify button */}
            <a href={loginUrl}>Login With Spotify</a>
        </div>
    );
}

export default Login;
