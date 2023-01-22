import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import { useDispatch } from "react-redux";
import { postUser } from "../../redux/actions";
import { AiFillGoogleCircle } from "react-icons/ai";

export default function GoogleAuth() {
  const dispatch = useDispatch();
  const [userGoogle, setUserGoogle] = useState({
    name: "papa",
    user_mail: "harurin567123@gmail.com",
    password: "prueba123",
  });

  const clientId =
    "715037409449-8e88u9scbkftob2bfdejv2d1b9ou75u7.apps.googleusercontent.com";
  const url = "http://localhost:3001/obtencionDeTokensGoogle";

  const handleLogin = () => {
    // Generate the URL for the Google OAuth 2.0 authorization page
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${url}&scope=email&response_type=code`;

    // Redirect the user to the authorization page
    window.location.href = authUrl;
  };

  return (
    <AiFillGoogleCircle
      color="white"
      fill="white"
      size="4em"
      onClick={handleLogin}
    >
      Login with Google
    </AiFillGoogleCircle>
  );
}
