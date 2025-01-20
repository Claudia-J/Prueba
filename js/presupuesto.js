/********************************************* FORMULARIO *******************************************************/

const nombreInput = document.getElementById('nombre')
const apellidoInput = document.getElementById('apellido')
const telefonoInput = document.getElementById('telefono')
const emailInput = document.getElementById('email')
const formulario = document.getElementById('formulario')
const producto = document.getElementById('producto')
const plazo = document.getElementById('plazo')
const extra = document.querySelectorAll('.extras')
const presupuestoFinal = document.getElementById('presupuestoFinal')


function validarNombre() {
    const nombre = nombreInput.value
    const nombrePattern = /^[a-zA-Z]*$/
    if(nombre.length <= 15 && nombrePattern.test(nombre)) {
        nombreInput.classList.add('valido')
        nombreInput.classList.remove('invalido')
        document.getElementById('nombreError').textContent = ''
    } else {
        nombreInput.classList.add('invalido')
        nombreInput.classList.remove('valido')
        document.getElementById('nombreError').textContent = 'El nombre del usuario sólo podrá contener letras y tendrá una longitud máxima de 15 caracteres.'
    }
}

function validarApellido() {
    const apellido = apellidoInput.value
    const apellidoPattern = /^[a-zA-Z]*$/
    if(apellido.length <= 40 && apellidoPattern.test(apellido)) {
        apellidoInput.classList.add('valido')
        apellidoInput.classList.remove('invalido')
        document.getElementById('apellidoError').textContent = ''
    } else {
        apellidoInput.classList.add('invalido')
        apellidoInput.classList.remove('valido')
        document.getElementById('apellidoError').textContent = 'El apellido del usuario sólo podrá contener letras y tendrá una longitud máxima de 40 caracteres.'
    }
}

function validarTelefono() {
    const telefono = telefonoInput.value
    const telefonoPattern = /^\d{9}$/
    if(telefonoPattern.test(telefono)) {
        telefonoInput.classList.add('valido')
        telefonoInput.classList.remove('invalido')
        document.getElementById('telefonoError').textContent = ''
    } else {
        telefonoInput.classList.add('invalido')
        telefonoInput.classList.remove('valido')
        document.getElementById('telefonoError').textContent = 'El número de teléfono debe tener 9 dígitos y contener sólo números.'
    }
}

function validarEmail() {
    const email = emailInput.value
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(emailPattern.test(email)) {
        emailInput.classList.add('valido')
        emailInput.classList.remove('invalido')
        document.getElementById('emailError').textContent = ''
    } else {
        emailInput.classList.add('invalido')
        emailInput.classList.remove('valido')
        document.getElementById('emailError').textContent = 'Ingrese un correo electrónico válido.'
    }
}


function actualizarValores() {
    let cuenta = 0;
            extra.forEach(element => {
                if(element.checked){
                    cuenta += parseInt(element.value);
                }
            });


    // Calcular
    const total = parseInt(producto.value) + cuenta - plazo.value


    // Mostrar la operación en el <span>
    presupuestoFinal.textContent = total
}

        /*producto.addEventListener('change', actualizarValores)
        plazo.addEventListener('change', actualizarValores)
        extra.forEach(element=>{element.addEventListener('change', actualizarValores)})
        presupuestoFinal.addEventListener('change', actualizarValores)*/

    //Validación de Formulario
function resetFormulario() {
    formulario.reset()
    nombreInput.classList.remove('valido')
    apellidoInput.classList.remove('valido')
    telefonoInput.classList.remove('valido')
    emailInput.classList.remove('valido')
    producto.addEventListener('valido')
    plazo.addEventListener('valido')
    extra.addEventListener('valido')
    presupuestoFinal.addEventListener('valido')

}

nombreInput.addEventListener('input', validarNombre)
apellidoInput.addEventListener('input', validarApellido)
telefonoInput.addEventListener('input', validarTelefono)
emailInput.addEventListener('input', validarEmail)
producto.addEventListener('change', actualizarValores)
plazo.addEventListener('change', actualizarValores)
extra.forEach(element=>{element.addEventListener('change', actualizarValores)})
presupuestoFinal.addEventListener('change', actualizarValores)



formulario.addEventListener('submit', function(event) {
    event.preventDefault()
    validarNombre()
    validarApellido()
    validarTelefono()
    validarEmail()
    actualizarValores()
    

    if(nombreInput.classList.contains('valido') && apellidoInput.classList.contains('valido') && telefonoInput.classList.contains('valido') && emailInput.classList.contains('valido') && producto.classList.contains('valido') && plazo.classList.contains('valido') && extra.classList.contains('valido') && presupuestoFinal.classList.contains('valido')) {
        alert('Formulario enviado correctamente')
        resetFormulario()
        //Donde debe ir lo quieres enviar. La lógica de a que lugar lo quieres enviar o para que se ha creado el formulario
    } else{
        alert('Por favor, corrija los errores en el formulario')
    }
})





