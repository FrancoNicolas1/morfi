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
    dispatch(setCheckoutProducts(cart));
    navigate.push("/Checkout");
  };
  const handleBack = (e) => {
    e.preventDefault();
    dispatch(getRestaurantById());
    history.push("/");
  };

  // function Guardar() {
  //   LocalStorage(cart, {});
  // }
  return (
    <Container>
      {!restaurantDetail ||
      !restaurantDetail?.photo ||
      !restaurantDetail?.name ||
      !restaurantDetail?.descriptions ||
      !restaurantDetail?.Products ? (
        <Loading />
      ) : (
        <>
          <div className="container-img-title">
            <BtnBack className="btn-back" onClick={(e) => handleBack(e)}>
              <FaArrowLeft fontSize={20} />
            </BtnBack>
            <h2 className="title-detail">{restaurantDetail?.name}</h2>
            <img
              className="image-card"
              src={restaurantDetail?.photo}
              alt={restaurantDetail?.name}
            />
            <h2>Description</h2>
            <p className="description">{restaurantDetail?.descriptions}</p>
          </div>
          <div className="container-data-products">
            <h2>Categories</h2>
            {restaurantDetail?.Categories?.map((categoryElem) => {
              return <p className="title-categories">{categoryElem.name}</p>;
            })}
            <h2>Products</h2>
            <div className="container-products">
              <Product filledCart={cart} products={restaurantDetail.Products} />
            </div>
            <button onClick={() => goCart()}>Ir a pagar!</button>
          </div>
        </>
      )}
    </Container>
  );
};
