import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProducts } from "../../redux/actions";
import { Loading } from "../loadingComponent/Loading";


const ContainerProduct = styled.div`
  /* border: solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 0;
  background-color: #ece8dd;
  border: 1px solid #1a120b;
  & .list-products {
    padding: 0;
    list-style: none;
    margin: 0 auto;
    width: 100%;
    & .product {
      background-color: #ffff9f;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      justify-content: space-between;
      margin-bottom: 1rem;
      /* padding: 5px; */
      height: 5rem;
      border: 1px solid #1a120b;
      text-align: center;
    }
    & .title-product {
      font-size: 1.2rem;
      text-align: center;
      padding: 0.2rem;
    }
    & .photo-product {
      width: 60px;
      height: 100%;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
    }
    & .price {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-self: center;
      text-align: center;
      align-items: center;
      padding: 10px;
      gap: 1.5rem;
      font-size: 1rem;
      font-weight: 700;
    }
    & .add-btn {
      outline: none;
      background-color: #ff9a33;
      padding: 10px;
      margin: 0 5px 0 0;
      border: 0;
      &:hover {
        background-color: #ff613c;
      }
    }
    & .decrease-btn {
      outline: none;
      background-color: #ff9a33;
      padding: 10px;
      margin: 0 5px 0 0;
      border: 0;
      &:hover {
        background-color: #ff613c;
      }
    }
    & .div-text {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-self: center;
      text-align: center;
      align-items: center;
      padding: 10px;
      gap: 1.5rem;
    }
    & .div-button {
      display: flex;
      align-self: flex-end;
      text-align: center;
      gap: 10px;
      flex-direction: row;
      align-items: center;
      padding: 10px;
      justify-content: center;
    }
    & .diver {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
    }
  }
`;

export const Product = (props) => {
  const { products, filledCart } = props;
  const [cart, setCart] = useState(
    products?.map((el) => ({ ...el, quantity: 0 }))
  );
  const dispatch = useDispatch();
  const restaurantId = useParams();
  //Funcion que recibe los datos actuales del producto como llegan desde la DB y luego encuentra el producto a alterar y lo marca y le reduce el stock en 1. Luego en la action se filtran los seleccionados y se despachan al back end.
  const handleAdd = (name, price, stock, id) => {
    const alteredProduct = cart.find((el) => el.name === name);
    const newProduct = {
      ...alteredProduct,
      stock: alteredProduct.stock > 0 ? alteredProduct.stock - 1 : 0,
      quantity:
        alteredProduct.quantity < stock ? alteredProduct.quantity + 1 : stock,
      selected: true,
    };

    let otherProducts = cart.filter((el) => el.name !== name);
    otherProducts.push(newProduct);
    let allProducts = otherProducts;
    setCart(allProducts);
    console.log(allProducts);
    dispatch(setSelectedProducts(allProducts));
  };
  const handleDecrease = (name, price, stock, id) => {
    const alteredProduct = cart.find((el) => el.name === name);
    const newProduct = {
      ...alteredProduct,
      stock: alteredProduct.stock < stock ? alteredProduct.stock + 1 : stock,
      quantity: alteredProduct.quantity > 0 ? alteredProduct.quantity - 1 : 0,
      selected: alteredProduct.stock + 1 === stock ? false : true,
    };

    let otherProducts = cart.filter((el) => el.name !== name);
    otherProducts.push(newProduct);
    let allProducts = otherProducts;
    setCart(allProducts);
    dispatch(setSelectedProducts(allProducts));
  };
  console.log(cart, "el carrito actual");

  return (
    <ContainerProduct>
      {products?.map((el) =>
        !el.id || !el.price || !el.name || !el.photo ? (
          <Loading />
        ) : (
          <ul className="list-products" key={el.id}>
            <li className="product">
              <img
                className="photo-product"
                src={el.photo}
                alt="Foto del producto"
              />
              <div className="diver">
                <div className="div-text">{el.name}</div>

                <div className="price">${el.price}</div>
                <div className="div-button">
                  <button
                    className="add-btn"
                    onClick={() =>
                      handleAdd(el.name, el.price, el.stock, el.id)
                    }
                  >
                    +
                  </button>
                  <div>
                    {filledCart.find((e) => e.name === el.name) ? (
                      <div
                        style={{ alignSelf: "center", margin: 0, padding: 0 }}
                      >
                        {filledCart.find((e) => e.name === el.name).quantity}
                      </div>
                    ) : (
                      <div>0</div>
                    )}
                  </div>
                  <button
                    className="decrease-btn"
                    onClick={() =>
                      handleDecrease(el.name, el.price, el.stock, el.id)
                    }
                  >
                    -
                  </button>
                </div>
              </div>
            </li>
            {filledCart.find((e) => e.name === el.name)?.stock === 0 ? (
              <div>
                Disculpe, lamentablemente no contamos con un stock para mas
                unidades que las seleccionadas en este momento.
              </div>
            ) : null}
          </ul>
        )
      )}
    </ContainerProduct>
  );
};
//<FaShoppingCart fontSize={15} />
