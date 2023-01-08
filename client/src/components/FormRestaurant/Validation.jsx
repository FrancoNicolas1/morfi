export default function validate(restaurant){
    let errors={}
    let reg_exUrl = /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/;
    let reg_exImg = /.*(png|jpg|jpeg|gif)$/;
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
   
    if(!restaurant.name){
        errors.name = "Ingrese nombre..."
    }else if(restaurant.name.length > 15){
        errors.name="No debe superar los 15 caracteres"
    }else if(!regexName.test(restaurant.name)){
        errors.name="Solo se acepta Letras"
    }
    if(!reg_exUrl.test(restaurant.photo)){
        errors.photo="No se detecta una Url"
    }else if(reg_exUrl.test(restaurant.photo)){
    if(!reg_exImg.test(restaurant.photo)){
            errors.photo="Debe ser png|jpg|jpeg|gif"
    }}
    if(!restaurant.products){
        errors.products = "Ingrese nombre..."
    }else if(restaurant.name.length > 15){
        errors.products="No debe superar los 15 caracteres"
    }else if(!regexName.test(restaurant.name)){
        errors.products="Solo se acepta Letras"
    }    
    if(!restaurant.description){
        errors.description = "Ingrese descripción..."
    }  


   
    return errors

}

