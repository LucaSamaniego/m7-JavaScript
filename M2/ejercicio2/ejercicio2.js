const usuario = prompt('Ingresar nombre de usuario')
const contrasenia = prompt('Ingrese su contraseña')

if (usuario == 'admin' && contrasenia == '1234'){ 
    alert('Ingreso correcto')
}
else {
    alert('Usuario o contraseña incorrecto')
}