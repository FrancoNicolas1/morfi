import React from "react";
import { Link } from "react-router-dom";

const Verify = () => {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <p>Gracias por confirmar tu email, ya puedes iniciar sesión</p>
    </div>
  );
};

export default Verify;
