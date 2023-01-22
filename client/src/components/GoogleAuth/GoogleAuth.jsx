import React, { useEffect, useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useDispatch, useSelector } from 'react-redux';
import { postUser } from '../../redux/actions';

export default function GoogleAuth  () {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    // const [userGoogle, setUserGoogle]= useState({
    //     name:"asdSf",
    //     user_mail:"",
    //     password:"pepe"
    // })

 
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: "715037409449-8e88u9scbkftob2bfdejv2d1b9ou75u7.apps.googleusercontent.com",
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    },[]);

    const onSuccess = async(res) => {
        // const ress= await res.profileObj.email
        // console.log(ress)
        // await setUserGoogle({
        //     ...userGoogle,
        //     user_mail:ress
        // })
        // console.log(userGoogle)
        // await setTimeout(() => {
        //     console.log({...userGoogle})
        //     dispatch(postUser({...userGoogle}))
        // }, 100);
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

