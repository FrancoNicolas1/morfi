import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { setCheckoutProducts } from "../../redux/actions";
import { BtnBack } from "../cardDetail/cardDetail.styled";
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
  flex-direction: "row";
  padding: 0;
  margin: 0;
  gap: 2vw;
`;

const Checkout = () => {
  const productosComprados = useSelector((state) => state.checkOut);

  const [estadoDeProductos, setEstadoDeProductos] = useState([
    ...productosComprados,
  ]);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCheckoutProducts(estadoDeProductos));
  }, [estadoDeProductos]);
  const total =
    productosComprados !== undefined && productosComprados !== null
      ? productosComprados
          .map((el) => el.price * el.quantity)
          .reduce((a, b) => a + b, 0)
      : 0;
  console.log(total, "el total");
  return (
    <BackgroundCheckout>
      <BtnBack
        className="btn-back"
        onClick={(e) =>
          history.push(`/detail/${estadoDeProductos[0].restaurantId}`)
        }
      >
        <FaArrowLeft fontSize={20} />
      </BtnBack>
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
            <p style={{ fontWeight: "bold" }}>Nombre del producto:</p>
            {productosComprados?.map((el) => (
              <ListProducts key={el.id}>{el.name}</ListProducts>
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
            <p style={{ fontWeight: "bold" }}>Descripcion del producto:</p>
            {productosComprados?.map((el) => (
              <ListProducts key={el.id}>{el.description}</ListProducts>
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
            <br></br>
            <br></br>
            {productosComprados?.map((el) => (
              <ListProducts key={el.id}>
                <button
                  style={{
                    width: "24px",
                    color: "black",
                    borderRadius: "5px",
                    backgroundColor: "orange",
                  }}
                  onClick={() => {
                    if (el.quantity >= 0) {
                      setEstadoDeProductos([
                        ...estadoDeProductos,
                        (el.quantity = el.quantity + 1),
                      ]);
                    }
                  }}
                >
                  +
                </button>
              </ListProducts>
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
            <br></br>
            <br></br>
            {productosComprados?.map((el) => (
              <ListProducts key={el.id}>
                <button
                  style={{
                    width: "24px",
                    color: "black",
                    borderRadius: "5px",
                    backgroundColor: "orange",
                  }}
                  onClick={() => {
                    if (el.quantity > 0) {
                      setEstadoDeProductos([
                        ...estadoDeProductos,
                        (el.quantity = el.quantity - 1),
                      ]);
                    }
                  }}
                >
                  -
                </button>
              </ListProducts>
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
          ></div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              padding: "10px",
              gap: "0.5vw",
            }}
          >
            <p style={{ fontWeight: "bold" }}>Precio</p>
            {productosComprados?.map((el) => (
              <ListProducts key={el.id}>
                <div>${el.price} </div>
              </ListProducts>
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
            <p style={{ fontWeight: "bold" }}>Cantidad</p>
            {productosComprados?.map((el) => (
              <ListProducts key={el.id}>
                X<div> {el.quantity} </div>
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
          <p style={{ fontWeight: "bold" }}>${total}</p>
        </div>
        <PaymentButton productosComprados={productosComprados}></PaymentButton>
      </ContainerCheckout>
    </BackgroundCheckout>
  );
};

export default Checkout;
