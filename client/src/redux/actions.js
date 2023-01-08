import axios from 'axios';

//////////////////////////////// ACTIONS RESTAURANT///////////////////////////////////////
export function allRestaurants() {
  return async function (dispatch) {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      let allRestaurants = await axios.get(
        'https://63b36e9f5901da0ab37f8792.mockapi.io/api/restaurant'
      );
      dispatch({
        type: 'GET_ALL_RESTAURANT',
        payload: allRestaurants.data,
      });
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: 'SET_LOADING', payload: false });
  };
}

////////////////////////////////// ESPERAR RUTA BY NAME ////////////////////////////////

// export function restaurantByName(name) {
//   return async function (dispatch) {
//     try {
//       let restaurantByName = await axios.get(
//         `http://localhost:3001/restaurant?name=${name}`
//       );
//       return dispatch({
//         type: 'RESTAURANT_BY_NAME',
//         payload: restaurantByName.data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

/////////////////////////// ESTO ES DE YAMI ///////////////////////

export function searchRestaurant(searchInput) {
  return async function (dispatch) {
    let json = await axios.get(`https://63b36e9f5901da0ab37f8792.mockapi.io/api/restaurant`);
    let filterProvidorio = json.data.filter((e)=>e.name.toLowerCase().includes(searchInput.toLowerCase()))
    if(filterProvidorio.length === 0){
        alert("No se encontro ese Restaurante")
        const all = await axios.get("https://63b36e9f5901da0ab37f8792.mockapi.io/api/restaurant")
        return dispatch({
          type: 'GET_ALL_RESTAURANT',
          payload: all.data,
      });
    }else{
      return dispatch({
        type: 'SEARCH_RESTAURANT',
        payload: filterProvidorio
      });
    }
   
  };
}
///////////////////////////////////////////////////////////////////////////////
export function getRestaurantById(id) {
  return async function (dispatch) {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      let restaurantById = await axios.get(
        `https://63b36e9f5901da0ab37f8792.mockapi.io/api/restaurant/${id}`
      );
      dispatch({
        type: 'GET_RESTAURANT_BY_ID',
        payload: restaurantById.data,
      });
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: 'SET_LOADING', payload: false });
  };
}

export function createRestaurant(data) {
  return async function (dispatch) {
    try {
      let createRestaurant = await axios.post(
        `https://63b36e9f5901da0ab37f8792.mockapi.io/api/restaurant`,
        data
      );
      return dispatch({
        type: 'CREATE_RESTAURANT',
        payload: createRestaurant.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
/////////////////////////////////////////////ACTIONS CATEGORY///////////////////////////////
export function getAllCategories() {
  return async function (dispatch) {
    let allCategories = await axios(
      'https://63b36e9f5901da0ab37f8792.mockapi.io/api/category'
    );
    return dispatch({
      type: 'GET_ALL_CATEGORIES',
      payload: allCategories.data,
    });
  };
}
/////////////////////////////////// FILTROS Y ORDENAMIENTOS
export function order(payload) {
  return {
    type: 'ORDER',
    payload,
  };
}

export function rating(payload) {
  return {
    type: 'RATING',
    payload,
  };
}

export function filterByCategories(payload) {
  return {
    type: 'FILTER_CATEGORIES',
    payload,
  };
}

///////////////////////////REFRESH////////////////////////////
export function refreshPag(payload){
  return{
      type:"REFRESH_PAG",
      payload:[]
  }
}


///////////////////////////////////////////////////////////

// status from pagination:
export const setNumberPageActive = (pageActive) => {
  console.log(pageActive);
  console.log('soy action creator', pageActive);
  return { type: 'SET_PAGE_ACTIVE', payload: pageActive };
};
