import { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRestaurantById } from '../../redux/actions';
import { Loading } from '../loadingComponent/Loading';
import { Product } from '../product/Product';
import { BtnBack, Container } from './cardDetail.styled';

export const CardDetail = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const restaurantDetail = useSelector((state) => state.restaurantDetail);
  const loading = useSelector((state) => state.loading);

  const loadDetailRestaurant = async (id) => {
    await dispatch(getRestaurantById(id));
  };

  useEffect(() => {
    loadDetailRestaurant(id);
  }, [id]);

  return (
    <Container>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div className="container-img-title">
            <BtnBack className="btn-back" to={'/'}>
              <FaArrowLeft fontSize={20} />
            </BtnBack>
            <h2 className="title-detail">{restaurantDetail?.name}</h2>
            <img
              className="image-card"
              src={restaurantDetail?.photo}
              alt={restaurantDetail?.name}
            />
            <p className="description">{restaurantDetail?.description}</p>
          </div>
          <div className="container-data-products">
            <h2>Categories</h2>
            {restaurantDetail?.category?.map((categoryElem) => {
              return <p className="title-categories">{categoryElem}</p>;
            })}
            <h2>Products</h2>
            <div className="container-products">
              {restaurantDetail?.products?.map((productList, i) => {
                return <Product key={i} products={productList} />;
              })}
            </div>
          </div>
        </>
      )}
    </Container>
  );
};
