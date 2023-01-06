import Pagination from '../Pagination/Pagination';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allRestaurants } from '../../redux/actions';
import styled from 'styled-components';
import Card from '../card/Card';

const Container = styled.div`
  border: solid green;
  border: 0;
  width: 90%;
  height: 100%;
  margin: 1rem auto;
  display: grid;
  gap: 2rem;
  grid-auto-rows: 23rem;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
`;

export default function Cards() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allRestaurants());
  }, []);
  const allRest = useSelector((state) => state.allRestaurants);

  const [currentPage, setCurrentPage] = useState(1); //pagina actual
  const [restaurantsForPage, setRestaurantsForPage] = useState(3); //pokemon por Pagina
  const indexOfLastRestaurants = currentPage * restaurantsForPage;
  const indexOfFirtsRestaurants = indexOfLastRestaurants - restaurantsForPage;
  const currentRestaurants = allRest.slice(
    indexOfFirtsRestaurants,
    indexOfLastRestaurants
  );

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <Container>
        {currentRestaurants?.map((restaurant) => {
          return <Card />;
        })}
      </Container>
      <Pagination
        restaurantsForPage={restaurantsForPage}
        allRest={allRest.length}
        pagination={pagination}
        currentPage={currentPage}
      />
    </>
  );
}
