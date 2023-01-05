const initialState={
    allRestaurants:[],
    restaurantByname:[],
    restaurantById:[],
    allCategories:[],
}
export default function rootReducer(state=initialState, action){
    switch(action.type){
        case "ALL_RESTAURANT":
            return {
                ...state,
                allRestaurants:action.payload
            }
        case "RESTAURANT_BY_NAME":
            return {
                ...state,
                restaurantsByName:action.payload
            }
        case "RESTAURANT_BY_ID":
            return {
                ...state,
                restaurantsById:action.payload
            }    
        case "ALL_CATEGORIES":
            return {
                ...state,
                allCategories:action.payload
            }    
                    
        
        default: return {...state}
    }
}