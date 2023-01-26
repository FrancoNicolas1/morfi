import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import swal from "sweetalert";

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({
        type: "LOGIN_USER",
        payload: user,
      });
    }
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <>
            {swal({
              title: "Acceso no permitido",
              text: "Por favor  ingrese al sitio web para continuar",
              type: "warning",
            }).then(function () {
              window.location.href = "/";
            })}
          </>
        )
      }
    />
  );
};

export default ProtectedRoute;
