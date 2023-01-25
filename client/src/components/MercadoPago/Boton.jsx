import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { payWithMercadoPago } from "../../redux/actions";

const PaymentButton = ({ productosComprados }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handlePayment = (productosComprados) => {
    console.log(productosComprados, "los comprados");
    if (productosComprados.length > 0) {
      setLoading(true);
      payWithMercadoPago(productosComprados.filter((p) => p.quantity !== 0))
        .then((response) => {
          setLoading(false);
          console.log(response);
          return response;
        })
        .then((response) => {
          localStorage.removeItem("cart");
          localStorage.removeItem("checkout");
          return response;
        })
        .then((response) => (window.location.href = response))
        .catch(() => {
          setLoading(false);
          // Acción a ejecutar en caso de error
        });
    } else {
      alert("No puedes realizar una compra sin ningun producto en el carrito!");
    }
  };

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <button
          style={{
            cursor: "pointer",
            margin: "10px 10px 0px 0px",
            fontSize: "smaller",
            fontWeight: "bolder",
            padding: "0.6rem 0.8rem",
            marginLeft: "4px",
            borderRadius: "4px",
            borderColor: "white",
            background: "#fd7e14",
            color: "white",
            width: "fit-content",
            alignSelf: "center",
          }}
          onClick={() => handlePayment(productosComprados)}
        >
          Pagar
        </button>
      )}
    </div>
  );
};

export default PaymentButton;
