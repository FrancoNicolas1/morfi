export default function validateProfile(user){
    let errors={}
    let reg_password =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if(!user.user_mail){
        errors.user_mail = "Ingrese un email..."
    }else if(!reg_password.test(user.user_mail)){
        errors.user_mail="Ingrese un email valido..."
    }
 
    return errors

}
