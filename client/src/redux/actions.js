

export function all(){
    return async function(dispatch){
        try {
       
        return dispatch({
            type: "ALL",
            payload:[]
        })
    } catch (error) {
        console.log(error)       
    }
    }
}
