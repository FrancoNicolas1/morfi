export default function validateProfile(user){
    let errors={}
    let reg_password =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    
    if(!user.name){
        errors.name = "Ingrese un nombre..."
    }
    if(!user.user_mail){
        errors.user_mail = "Ingrese un email..."
    }else if(!reg_password.test(user.user_mail)){
        errors.user_mail="Ingrese un email valido..."
    }
    if(!user.password){
        errors.password = "Ingrese una contraseña..."
    }
    if(!user.surname){
        errors.surname = "Ingrese un apellido..."
    }
    if(!user.phone){
        errors.phone = "Ingrese un numero de telefono..."
    }
    if(!user.identification){
        errors.identification= "Ingrese su dni..."
    }
    if(!user.postalCode){
        errors.postalCode = "Ingrese su codigo postal..."
    }
    if(!user.street_name){
        errors.street_name = "Ingrese nombre de su calle..."
    }
    if(!user.street_number){
        errors.street_number = "Ingrese un numero..."
    }

//     name:"",
//     user_mail:"",
//      password:"",
//      surname:"",
//    phone:"",
//    identification:"",
//    postalCode:"",
//    street_name:"",
//    street_number:""
    return errors

}
