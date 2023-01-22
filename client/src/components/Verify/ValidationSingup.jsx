export default function validationSingUp(state){
    let errors={}
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexMail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
   
   
    if(!state.name){
        errors.name = "Ingrese nombre..."
    }else if(state.name.length > 15){
        errors.name="No debe superar los 15 caracteres"
    }else if(!regexName.test(state.name)){
        errors.name="Solo se acepta Letras"
    }
    if(!state.user_mail){
        errors.user_mail="Ingrese mail..."
    }else if(!regexMail.test(state.user_mail)){
        errors.user_mail="Ingrese un mail valido..."
    }
    if(!state.password){
        errors.password = "Ingrese una contraseña..."
    }
    
   
    return errors
}