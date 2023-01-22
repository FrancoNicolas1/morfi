export default function validateSingUp(state){
    let errors={}
    let reg_password =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if(!state.name){
        errors.name = "Ingrese un nombre de usuario..."
    }
    if(!state.user_mail){
        errors.user_mail = "Ingrese un email valido..."
    } else if(!reg_password.test(state.user_mail)){
        errors.user_mail="Ingrese un email valido..."
    }
    if(!state.password){
        errors.password = "Ingrese un password..."
    }
    return errors

}
