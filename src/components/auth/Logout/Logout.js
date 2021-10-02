import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = "382147708211-8rgvf7ca8b4p1nqe433pvp604sg0q2na.apps.googleusercontent.com";

function Logout() {
    const onSuccess = () => {
        alert('Logout made successfully');
    };

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    )
}

export default Logout;