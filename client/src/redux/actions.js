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