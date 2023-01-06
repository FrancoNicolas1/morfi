import axios from 'axios';

//////////////////////////////// ACTIONS RESTAURANT///////////////////////////////////////
export function allRestaurants() {
  return async function (dispatch) {
    try {
      let allRestaurants = await axios.get('https://63b36e9f5901da0ab37f8792.mockapi.io/api/restaurant');
      return dispatch({
        type: 'GET_ALL_RESTAURANT',
        payload: allRestaurants.data,
      });
    } catch (error) {
      console.log(error);
    }
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
    var json = await axios.get(
      `http://localhost:3001/restaurant?name=${searchInput}`
    );
    console.log(json.data);
    return dispatch({
      type: 'SEARCH_RESTAURANT',
      payload: json.data,
    });
  };
}
///////////////////////////////////////////////////////////////////////////////
export function restaurantsById(id) {
  return async function (dispatch) {
    try {
      let restaurantsById = await axios.get(`https://63b36e9f5901da0ab37f8792.mockapi.io/api/restaurant/${id}`);
      return dispatch({
        type: 'GET_RESTAURANT_BY_ID',
        payload: restaurantsById.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function createRestaurant(data) {
  return async function (dispatch) {
    try {
      let createRestaurant = await axios.post(`https://63b36e9f5901da0ab37f8792.mockapi.io/api/restaurant`, data);
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
    let allCategories = await axios('https://63b36e9f5901da0ab37f8792.mockapi.io/api/category');
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
///////////////////////////////////////////////////////////

