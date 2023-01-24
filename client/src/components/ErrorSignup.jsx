export default function validateSingUp(state) {
  let errors = {};
  let reg_password =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!state.name) {
    errors.name = "Ingrese un nombre de usuario...";
  }
  if (!state.surname) {
    errors.surname = "Ingrese un apellido...";
  }
  if (!state.user_mail) {
    errors.user_mail = "Ingrese un email válido...";
  } else if (!reg_password.test(state.user_mail)) {
    errors.user_mail = "Ingrese un email válido...";
  }
  if (!state.password) {
    errors.password = "Ingrese una contraseña...";
  }
  if (!state.phone) {
    errors.phone = "Ingrese un teléfono celular...";
  }
  if (!state.identification) {
    errors.identification = "Ingrese un DNI...";
  }
  if (!state.postalCode) {
    errors.postalCode = "Ingrese un código postal...";
  }
  if (!state.street_name) {
    errors.street_name = "Ingrese el nombre de su calle...";
  }
  if (!state.street_number) {
    errors.street_number = "Ingrese el número de su calle...";
  }

  return errors;
}
