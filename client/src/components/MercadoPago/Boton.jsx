import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import MercadoPagoCheckout from 'react-sdk-mercadopago';
import { payWithMercadoPago } from '../../redux/actions';

const PaymentButton = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const clientId = "TU_CLIENT_ID";
  const urlCallback = 'TU_URL_CALLBACK';

  const handlePayment = (response) => {
    setLoading(true);
    dispatch(payWithMercadoPago(response))
      .then(() => {
        setLoading(false);
        // Acción a ejecutar en caso de éxito
      })
      .catch(() => {
        setLoading(false);
        // Acción a ejecutar en caso de error
      });
  }

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <MercadoPagoCheckout
          clientId={clientId}
          urlCallback={urlCallback}
          onSuccess={handlePayment}
          onError={() => {
            // Acción a ejecutar en caso de error
          }}
        />
      )}
    </div>
  );
};

export default PaymentButton;

