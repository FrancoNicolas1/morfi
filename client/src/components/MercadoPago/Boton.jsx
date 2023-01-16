import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { payWithMercadoPago } from "../../redux/actions";

const PaymentButton = ({ productosComprados }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handlePayment = (productosComprados) => {
    setLoading(true);
    payWithMercadoPago(productosComprados)
      .then((response) => {
        setLoading(false);
        console.log(response);
        return response;
      })
      .then((response) => (window.location.href = response))
      .catch(() => {
        setLoading(false);
        // Acción a ejecutar en caso de error
      });
  };

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <button onClick={() => handlePayment(productosComprados)}>Pagar</button>
      )}
    </div>
  );
};

export default PaymentButton;
