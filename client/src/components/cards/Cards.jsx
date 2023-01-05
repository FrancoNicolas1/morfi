import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allRestaurants } from '../../redux/actions'
import Pagination from "../Pagination/Pagination";

const Container = styled.div`
display:flex;
height:300px;
flex-wrap:wrap;
justify-content:center;
gap:20px;
`
export default function Cards() {
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(allRestaurants())
    },[])
    const allRest = useSelector((state) => state.allRestaurants)

    const [currentPage,setCurrentPage]=useState(1) //pagina actual
    const [restaurantsForPage, setRestaurantsForPage]=useState(3) //pokemon por Pagina
    const indexOfLastRestaurants= currentPage * restaurantsForPage
    const indexOfFirtsRestaurants = indexOfLastRestaurants - restaurantsForPage
    const currentRestaurants = allRest.slice(indexOfFirtsRestaurants,indexOfLastRestaurants)

    const pagination = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }
  return (
    <>
    <Container>
    {currentRestaurants?.map((restaurant) => {
        return(
        <div>
        <Card name={restaurant.name}/> 
        </div>
        )
    })}    
    </Container> 
    <Pagination 
    restaurantsForPage={restaurantsForPage} 
    allRest={allRest.length} 
    pagination={pagination} 
    currentPage={currentPage}/>
    </>
  );
}
