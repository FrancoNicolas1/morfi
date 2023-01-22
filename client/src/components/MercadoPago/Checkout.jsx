import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import PaymentButton from "./Boton";

const BackgroundCheckout = styled.div`
  padding: 0;
  background-color: #ff613c;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const ContainerCheckout = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  background-color: white;
  gap: 1rem;
  border: 1px solid black;
  width: 60vw;

  flex-direction: column;
  & .title {
    color: #ff613c;
  }
`;

const ListProducts = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  gap: 2vw;
`;

const Checkout = () => {
  const productosComprados = useSelector((state) => state.checkOut);
  console.log(productosComprados, "asdfg");
  const total = productosComprados?.reduce(
    (a, b) => a.price * a.quantity + b.price * b.quantity
  );
  return (
    <BackgroundCheckout>
      <ContainerCheckout>
        <h1 className={"title"}>Detalle de Compra</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "3vw",
            border: "1px solid black",
            padding: "0px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              padding: "10px",
              gap: "0.5vw",
            }}
          >
            <p>Nombre del producto:</p>
            {productosComprados?.map((el) => (
              <ListProducts>{el.name}</ListProducts>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              maxWidth: "35vw",
              padding: "10px",
              margin: 0,
              gap: "0.5vw",
            }}
          >
            <p>Descripcion del producto:</p>
            {productosComprados?.map((el) => (
              <ListProducts>{el.description}</ListProducts>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              padding: "10px",
              gap: "0.5vw",
            }}
          >
            <button>ajjjj</button>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              padding: "10px",
              gap: "0.5vw",
            }}
          >
            <p>Precio</p>
            {productosComprados?.map((el) => (
              <ListProducts>
                ${el.price} X {el.quantity}
              </ListProducts>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1vw",
            padding: "10px",
            justifyContent: "space-evenly",
          }}
        >
          <p>Total de Compra:</p>
          <p>${total}</p>
        </div>
        <PaymentButton productosComprados={productosComprados}></PaymentButton>
      </ContainerCheckout>
    </BackgroundCheckout>
  );
};

export default Checkout;
