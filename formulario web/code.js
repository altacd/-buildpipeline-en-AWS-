const nombre = document.getElementById("name")
const apellido = document.getElementById("apellido")
const cedula = document.getElementById("cedula")
const email = document.getElementById("email")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")





form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings= "";
    let entrar = false;
    let regetxEmail= /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if(nombre.value.length <6){
        warnings += `El nombre no es valido <br>`
        entrar= true

    }
    if(apellido.value.length <6){
        warnings += `El apellido no es valido <br>`
        entrar= true

    }
    if(cedula.value.length <11){
        warnings += `La cedula  no es valida <br>`
        entrar= true

    }

    if (!regetxEmail.test(email.value)){
        warnings += `El Email no es valido <br>`
        entrar = true

    }
    if(regetxEmail.test(cedula.value)){
        warnings +=""
        entrar = true
    }
    if (entrar){
        parrafo.innerHTML = warnings
    }else{

        parrafo.innerHTML = "Enviado"
    }


})