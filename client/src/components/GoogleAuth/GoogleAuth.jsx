import React, { useEffect, useState } from "react";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useDispatch } from "react-redux";
import { postUser } from "../../redux/actions";

export default function GoogleAuth() {
  const dispatch = useDispatch();
  const [userGoogle, setUserGoogle] = useState({
    name: "papa",
    user_mail: "harurin567123@gmail.com",
    password: "prueba123",
  });

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId:
          "715037409449-8e88u9scbkftob2bfdejv2d1b9ou75u7.apps.googleusercontent.com",
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  }, []);

  const onSuccess = (res) => {
    const email = res.profileObj.email;
    const name = res.profileObj.name;
    const photo = res.profileObj.imageUrl;
    setUserGoogle({
      ...userGoogle,
      name: name,
      user_mail: email,
      photo: photo,
    });
    setTimeout(() => {
      dispatch(postUser({ ...userGoogle }));
    }, 100);
  };

  const onFailure = (err) => {
    alert("failed:", err);
  };

  return (
    <>
      <GoogleLogin
        clientId="715037409449-8e88u9scbkftob2bfdejv2d1b9ou75u7.apps.googleusercontent.com"
        buttonText="Inicia sesión con Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </>
  );
}
