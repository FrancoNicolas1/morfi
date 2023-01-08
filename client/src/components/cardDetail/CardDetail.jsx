import { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRestaurantById } from '../../redux/actions';
import { Loading } from '../loadingComponent/Loading';
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
    console.log(id, loading, restaurantDetail);
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
            <h2 className="title-detail">{restaurantDetail.name}</h2>
            <img
              className="image-card"
              src={restaurantDetail.photo}
              alt={restaurantDetail.name}
            />
            <p className="description">{restaurantDetail.description}</p>
          </div>
          <div className="container-data-products"></div>
        </>
      )}
    </Container>
  );
};
