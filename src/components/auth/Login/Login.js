import React, { useState } from 'react';
import GoogleLogin from "react-google-login";

const clientId = "382147708211-8rgvf7ca8b4p1nqe433pvp604sg0q2na.apps.googleusercontent.com";

function Login() {
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
    };

    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [url, setUrl] = useState("");

    const responseGoogle = response => {
        console.log(response);
        setName(response.profileObj.name);
        setEmail(response.profileObj.email);
        setUrl(response.profileObj.imageUrl);
    };

    return (
        <div className="login-page">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}></GoogleLogin>
        </div>
    )
}

export default Login;