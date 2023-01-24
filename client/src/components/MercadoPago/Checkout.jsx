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

const ListButton = styled.button`
  width: 24px;
  color: black;
  border-radius: 5px;
  background-color: orange;
  &:hover {
    color:black;
    background-color: red;
  },
`;

const Checkout = () => {
  const productosComprados = useSelector((state) => state.checkOut);

  const [estadoDeProductos, setEstadoDeProductos] =
    useState(productosComprados);
  const history = useHistory();
  const dispatch = useDispatch();
  //Este despacha a la tienda global el estado de productos cada vez que cambia el mismo
  useEffect(() => {
    console.log("deberia cambiar pero xD", estadoDeProductos);
    dispatch(setCheckoutProducts(estadoDeProductos));
    if (estadoDeProductos.length > 0) {
      console.log("cambio los locales");
      window.localStorage.setItem(
        "checkout",
        JSON.stringify(estadoDeProductos)
      );
      window.localStorage.setItem("cart", JSON.stringify(estadoDeProductos));
    }
  }, [estadoDeProductos]);

  useEffect(() => {
    const checkoutEnLocalStorage = JSON.parse(
      window.localStorage.getItem("checkout")
    );
    if (checkoutEnLocalStorage !== undefined) {
      setEstadoDeProductos(checkoutEnLocalStorage);
    }
  }, []);

  const total =
    productosComprados !== undefined && productosComprados !== null
      ? productosComprados
          ?.filter((el) => el.quantity !== 0)
          ?.map((el) => el.price * el.quantity)
          .reduce((a, b) => a + b, 0)
      : 0;

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
            {productosComprados
              ?.filter((el) => el.quantity !== 0)
              ?.map((el) => (
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
            {productosComprados
              ?.filter((el) => el.quantity !== 0)
              .map((el) => (
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
            {productosComprados
              ?.filter((el) => el.quantity !== 0)
              .map((el, index) => (
                <ListProducts key={el.id}>
                  <ListButton
                    onClick={() => {
                      if (el.quantity >= 0) {
                        const newEstado = {
                          ...estadoDeProductos[index],
                          quantity: el.quantity + 1,
                        };
                        console.log(newEstado, "el new estado re bugueado");
                        let estadosFiltrados = estadoDeProductos.filter(
                          (e) => e.id !== newEstado.id
                        );
                        console.log(estadosFiltrados, "los estados filtrados");
                        estadosFiltrados.push(newEstado);

                        // const estadoSort = estadosFiltrados.sort(
                        //   (a, b) => a.id - b.id
                        // );
                        // console.log(
                        //   estadoSort,
                        //   "assdfaFUCKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK"
                        // );
                        setEstadoDeProductos(estadosFiltrados);
                      }
                    }}
                  >
                    +
                  </ListButton>
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
            {productosComprados
              ?.filter((el) => el.quantity !== 0)
              ?.map((el, index) => (
                <ListProducts key={el.id}>
                  <ListButton
                    onClick={() => {
                      console.log(el.quantity, "DEBERIA SER MAYOR A 0 REY ");
                      if (el.quantity > 0) {
                        const newEstado = {
                          ...estadoDeProductos[index],
                          quantity: el.quantity - 1,
                        };
                        console.log(newEstado, "el estado re bugeuado del -");
                        let estadosFiltrados = estadoDeProductos.filter(
                          (e) => e.id !== newEstado.id
                        );
                        console.log(
                          estadosFiltrados,
                          "los estados filtrados RE BUG"
                        );
                        estadosFiltrados.push(newEstado);

                        // const estadoSort = estadosFiltrados.sort(
                        //   (a, b) => a.id - b.id
                        // );
                        // console.log(
                        //   estadoSort,
                        //   "assdfaFUCKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK"
                        // );
                        setEstadoDeProductos(estadosFiltrados);
                      } else alert("es el else");
                    }}
                  >
                    -
                  </ListButton>
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
            {productosComprados
              ?.filter((el) => el.quantity !== 0)
              ?.map((el) => (
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
            {productosComprados
              ?.filter((el) => el.quantity !== 0)
              ?.map((el) => (
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
