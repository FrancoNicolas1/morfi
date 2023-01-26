export default function validate(products) {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let reg_exUrl =
    /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/;
  let reg_exImg = /.*(png|jpg|jpeg|gif)$/;
  if (!products.name) {
    errors.name = "Ingrese nombre...";
  } else if (products.name.length > 25) {
    errors.name = "No debe superar los 25 caracteres";
  } else if (!regexName.test(products.name)) {
    errors.name = "Solo se acepta Letras";
  }
  if (!reg_exUrl.test(products.photo)) {
    errors.photo = "No se detecta una Url";
  } else if (reg_exUrl.test(products.photo)) {
    if (!reg_exImg.test(products.photo)) {
      errors.photo = "Debe ser png|jpg|jpeg|gif";
    }
  }

  if (!products.price) {
    errors.price = "Se requiere precio";
  } else if (!/^([0-9])*$/.test(products.price)) {
    errors.price = "Solo numeros enteros";
  } else if (products.price === "0") {
    errors.price = "0 no puede ser";
  }
  if (!products.stock) {
    errors.stock = "Se requiere stock";
  } else if (!/^([0-9])*$/.test(products.stock)) {
    errors.stock = "Solo numeros enteros";
  } else if (products.price === "0") {
    errors.stock = "0 no puede ser";
  }

  return errors;
}
