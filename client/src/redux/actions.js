import axios from "axios";

//////////////////////////////// ACTIONS RESTAURANT///////////////////////////////////////
export function allRestaurants() {
  return async function (dispatch) {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      let allRestaurants = await axios.get(
        "https://63b36e9f5901da0ab37f8792.mockapi.io/api/restaurant"
      );
      dispatch({
        type: "GET_ALL_RESTAURANT",
        payload: allRestaurants.data,
      });
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: "SET_LOADING", payload: false });
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
    let json = await axios.get(
      `https://63b36e9f5901da0ab37f8792.mockapi.io/api/restaurant`
    );
    let filterProvidorio = json.data.filter((e) =>
      e.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    if (filterProvidorio.length === 0) {
      alert("No se encontro ese Restaurante");
      const all = await axios.get(
        "https://63b36e9f5901da0ab37f8792.mockapi.io/api/restaurant"
      );
      return dispatch({
        type: "GET_ALL_RESTAURANT",
        payload: all.data,
      });
    } else {
      return dispatch({
        type: "SEARCH_RESTAURANT",
        payload: filterProvidorio,
      });
    }
  };
}
///////////////////////////////////////////////////////////////////////////////
export function getRestaurantById(id) {
  return async function (dispatch) {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      let restaurantById = await axios.get(
        `https://63b36e9f5901da0ab37f8792.mockapi.io/api/restaurant/${id}`
      );
      dispatch({
        type: "GET_RESTAURANT_BY_ID",
        payload: restaurantById.data,
      });
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: "SET_LOADING", payload: false });
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
        type: "CREATE_RESTAURANT",
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
      "https://63b36e9f5901da0ab37f8792.mockapi.io/api/category"
    );
    return dispatch({
      type: "GET_ALL_CATEGORIES",
      payload: allCategories.data,
    });
  };
}
/////////////////////////////////// FILTROS Y ORDENAMIENTOS
export function order(payload) {
  return {
    type: "ORDER",
    payload,
  };
}

export function rating(payload) {
  return {
    type: "RATING",
    payload,
  };
}

export function filterByCategories(payload) {
  return {
    type: "FILTER_CATEGORIES",
    payload,
  };
}

///////////////////////////REFRESH////////////////////////////
export function refreshPag(payload) {
  return {
    type: "REFRESH_PAG",
    payload: [],
  };
}

///////////////////////////////////////////////////////////

// status from pagination:
export const setNumberPageActive = (pageActive) => {
  return { type: "SET_PAGE_ACTIVE", payload: pageActive };
};

//////////////////////////MERCADOPAGO/////////////////////////////////
export function payWithMercadoPago() {
  return async function (dispatch) {
    let payment= await axios(
      'https://localhost:3001/crearOrden'//lo uso en el front en el boton(donde pago todo)
    );
    return dispatch({
      type: 'PAYMENT',
      payload: payment.data,
    });
  };
}



//////////////////////////PRODUCT/////////////////////////////////
export const fetchProduct = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://localhost:3001/products/${id}`);
      dispatch({ type: 'FETCH_PRODUCT', payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createProduct = async (id) => {
    try {
      const response = await axios.post(`https://localhost:3001/create-product/${id}`);
      return response
    } catch (error) {
      console.log(error);
    }
  };


//////////////////////LOGOUT/////////////////////////////////////
export const logOut = () => {
  return { type: "LOG_OUT", payload: [] };
};
/////////////////////////////////SINGUP///////
export function postUser(payload) {
  return async function (dispatch) {
    try {
      const json = await axios.post("http://localhost:3001/signup", payload);
      console.log(json);
    } catch (error) {
      console.log(error.response.data.error);
    }
  };
}
////////////////////////////TODOS LOS USUARIOS///////////////
export function getAllUsers() {
  return async function (dispatch) {
    try {
      let allUsers = await axios.get("http://localhost:3001/users");
      dispatch({
        type: "GET_ALL_USERS",
        payload: allUsers.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
