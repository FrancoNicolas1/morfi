import axios from "axios"



export function allRestaurants(){
    return async function(dispatch){
        try {       
        let allRestaurants = await axios.get("http://localhost:3001/restaurants")    
        return dispatch({
            type: "ALL_RESTAURANT",
            payload:allRestaurants.data
        })
    } catch (error) {
        console.log(error)       
    }
    }
}

export function restaurantByName(name){
    return async function(dispatch){
        try {       
        let restaurantByName = await axios.get(`http://localhost:3001/restaurant?name=${name}`)    
        return dispatch({
            type: "RESTAURANT_BY_NAME",
            payload:restaurantByName.data
        })
    } catch (error) {
        console.log(error)       
    }
    }
}

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

  export function getAllCategories() {
    return async function (dispatch) {
      var json = await axios("http://localhost:3001/categories");
      return dispatch({
        type: "GET_ALL_CATEGORIES",
        payload: json.data,
      });
    };
  }
  
  export function searchRestaurant(searchInput) {
    return async function (dispatch) {
      var json = await axios.get(`http://localhost:3001/restaurant?name=${searchInput}`);
      console.log(json.data)
      return dispatch({
        type: "SEARCH_RESTAURANT",
        payload: json.data,
      });
    };
  }