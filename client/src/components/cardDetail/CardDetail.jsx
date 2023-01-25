import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getRestaurantById, setCheckoutProducts } from "../../redux/actions";
import { Loading } from "../loadingComponent/Loading";
import { LocalStorage } from "../LocalStorage/LocalStorage";
import { Product } from "../product/Product";
import { BtnBack, Container } from "./cardDetail.styled";

export const CardDetail = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const restaurantDetail = useSelector((state) => state.restaurantDetail);
  const loading = useSelector((state) => state.loading);
  const cart = useSelector((state) => state.cart);
  const checkout = useSelector((state) => state.checkOut);
  const actualUser = useSelector((state) => state.user);
  console.log(actualUser, "el usuario actual");
  const history = useHistory();
  console.log(
    checkout,
    "FUNCIONO Y ME LLENO PARA MOSTRAR EN LA PASARELA MI REY"
  );
  const loadDetailRestaurant = async (id) => {
    await dispatch(getRestaurantById(id));
  };
  const navigate = useHistory();
  useEffect(() => {
    loadDetailRestaurant(id);
  }, [id]);
  const goCart = () => {
    if (actualUser[0]?.email && actualUser[0]?.aud) {
      console.log("entre a este 1");
      dispatch(setCheckoutProducts(cart));
      window.localStorage.setItem("checkout", JSON.stringify(cart));
      navigate.push("/cartRegister");
    } else if (cart.length > 0) {
      console.log("entre a este 2");
      dispatch(setCheckoutProducts(cart));
      window.localStorage.setItem("checkout", JSON.stringify(cart));
      navigate.push("/Checkout");
    }
  };
  const handleBack = (e) => {
    e.preventDefault();
    dispatch(getRestaurantById());
    history.push("/");
  };

  // function Guardar() {
  //   LocalStorage(cart, {});
  // }
  console.log(restaurantDetail, "el que llega");
  return (
    <Container>
      {!restaurantDetail ||
      !restaurantDetail?.photo ||
      !restaurantDetail?.name ||
      !restaurantDetail?.descriptions ||
      !restaurantDetail?.Products ? (
        <Loading />
      ) : (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              gap: "5vw",
              border: "3px solid black",
              width: "100%",
            }}
          >
            <BtnBack className="btn-back" onClick={(e) => handleBack(e)}>
              <FaArrowLeft fontSize={20} />
            </BtnBack>
            <div className="container-img-title">
              <h2
                className="title-detail"
                style={{
                  color: "white",
                  alignSelf: "center",
                  textDecoration: "underline",
                }}
              >
                {restaurantDetail?.name}
              </h2>
              <img
                className="image-card"
                src={restaurantDetail?.photo}
                alt={restaurantDetail?.name}
              />
              <h2
                style={{
                  color: "white",
                  alignSelf: "center",
                }}
              >
                Descripción
              </h2>
              <p
                className="description"
                style={{
                  alignSelf: "center",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  width: "50vw",
                  textAlign: "center",
                }}
              >
                {restaurantDetail?.descriptions}
              </p>
            </div>
            <div className="container-data-products">
              <h2
                style={{
                  top: 0,
                  justifyContent: "flex-start",
                  color: "white",
                  alignSelf: "center",
                  textDecoration: "underline",
                }}
              >
                Productos disponibles:
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid black",
                  width: "fit-content",
                  backgroundColor: " #ff613c",
                }}
              >
                {restaurantDetail?.Categories?.map((categoryElem) => {
                  return (
                    <h2
                      className="title-categories"
                      style={{
                        color: "white",
                        alignSelf: "center",
                        textDecoration: "underline",
                        width: "100%",
                        textAlign: "center",
                        backgroundColor: "#ff613c",
                      }}
                    >
                      {categoryElem.name}
                    </h2>
                  );
                })}
                <div className="container-products">
                  <Product
                    filledCart={cart}
                    products={restaurantDetail?.Products}
                  />
                </div>
              </div>

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
                  background: "#d43b2d",
                  color: "white",
                  width: "fit-content",
                  alignSelf: "center",
                  opacity: cart.length === 0 ? 0.6 : 1,
                }}
                disabled={cart.length === 0 ? true : false}
                onClick={() => goCart()}
              >
                Ir a pagar!
              </button>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};
