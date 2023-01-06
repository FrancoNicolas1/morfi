import axios from "axios"


//////////////////////////////// ACTIONS RESTAURANT///////////////////////////////////////
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

export function restaurantById(id){
    return async function(dispatch){
        try {       
        let restaurantById = await axios.get(`http://localhost:3001/restaurants/${id}`)    
        return dispatch({
            type: "RESTAURANT_BY_ID",
            payload:restaurantById.data
        })
    } catch (error) {
        console.log(error)       
    }
    }
}

/////////////////////////////////////////ACTIONS CATEGORIES/////////////////////////////////

export function allCategories(){
    return async function(dispatch){
        try {       
        let allCategories = await axios.get(`http://localhost:3001/categories`)    
        return dispatch({
            type: "ALL_CATEGORIES",
            payload:allCategories.data
        })
    } catch (error) {
        console.log(error)       
    }
    }
}