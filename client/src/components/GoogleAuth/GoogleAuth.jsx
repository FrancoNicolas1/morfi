import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useSelector } from 'react-redux';

export default function GoogleAuth  () {
    const user = useSelector(state => state.user)
    

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: "715037409449-8e88u9scbkftob2bfdejv2d1b9ou75u7.apps.googleusercontent.com",
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const onSuccess = (res) => {
        user.push(res.profileObj.email)
        console.log(res)
        alert("Sesión iniciada")
    };

    const onFailure = (err) => {
        alert('failed:', err);
    };

    return (
        <>
            <GoogleLogin
                clientId="715037409449-8e88u9scbkftob2bfdejv2d1b9ou75u7.apps.googleusercontent.com"
                buttonText="Inicia sesión con Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </>
    )
}

