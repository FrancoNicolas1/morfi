import Pagination from "../Pagination/Pagination";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allRestaurants, setNumberPageActive } from "../../redux/actions";
import styled from "styled-components";
import Card from "../card/Card";
import { Loading } from "../loadingComponent/Loading";

const Container = styled.div`
  border: solid green;
  border: 0;
  width: 90%;
  height: 100%;
  margin: 1rem auto;
  display: grid;
  gap: 2rem;
  grid-auto-rows: 23rem;
  grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
`;

export default function Cards() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allRestaurants());
  }, []);
  const restaurants = useSelector((state) => state.restaurant);
  const loading = useSelector((state) => state.loading);

  const [currentPage, setCurrentPage] = useState(1); //pagina actual
  const [restaurantsForPage, setRestaurantsForPage] = useState(8);
  const indexOfLastRestaurants = currentPage * restaurantsForPage;
  const indexOfFirtsRestaurants = indexOfLastRestaurants - restaurantsForPage;
  const currentRestaurants = restaurants.slice(
    indexOfFirtsRestaurants,
    indexOfLastRestaurants
  );

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
    dispatch(setNumberPageActive(parseInt(pageNumber)));
  };
  return (
    <>
      <Pagination
        restaurantsForPage={restaurantsForPage}
        allRest={restaurants.length}
        pagination={pagination}
        currentPage={currentPage}
      />
      <Container>
        {loading ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            {currentRestaurants.map((restaurant) => (
              <Card
                rating={restaurant.rating}
                name={restaurant.name}
                category={restaurant.category}
                description={restaurant.description}
                photo={restaurant.photo}
                id={restaurant.id}
                reviews={restaurant.reviews}
                products={restaurant.products}
                key={restaurant.name}
              ></Card>
            ))}
          </>
        )}
      </Container>
    </>
  );
}
