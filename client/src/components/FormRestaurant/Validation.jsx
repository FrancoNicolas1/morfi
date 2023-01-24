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
 


   
    return errors

}

