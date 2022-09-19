//querySelector
const heading= document.querySelector('.header__texto h2');
heading.textContent='nuevo headings';
console.log(heading);

//querySelectorAll
const enlaces=document.querySelectorAll('.navegacion a');
enlaces[0].textContent='Nuevo texto para enlace';//le da un texto al enlace
enlaces[0].classList.add('nueva-clase');//agraga una nueva clase
// enlaces[0].classList.remove('navegacion__enlace');//quitar una clase


// //getElementById (ya no se utiliza mucho)

// const heading2=document.getElementById('heading');
// console.log('heading2');


// generar un nuevo enlace
const nuevoEnlace=document.createElement('A');

// Agregar el href
nuevoEnlace.href='nuevo-enlace.html';

// agregar el texto
nuevoEnlace.textContent='Tienda Virtual'

// agragar la clase
nuevoEnlace.classList.add('navegacion__enlace');

// agragarlo al documento
const navegacion=document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

//eventos

// console.log("1");
// window.addEventListener("load",function(){//load espera a que el JS y los archivos que depende del HTML esten listos
//     console.log("2");
// });

// window.onload=function(){//hace lo mismo que la funcion anterior
//     console.log("3");
// }

// document.addEventListener('DOMContentLoaded', function(){//Solo espera el HTML y no a las imagenes y el CSS
//     console.log("4");
// });

// console.log("5");

// window.onscroll= function(){
//     console.log("scrolling");
// }

//seleccionar elementos y asociarles un evento

// const btnEnviar=document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(e){//e es el evento que sucede
//     console.log(e);
//     e.preventDefault();//evita que cumpla su funcion de default

//     //validar un formulario para
//     console.log("Enviando formulario");
// });

//Eventos de los inputs y Textarea

const datos={
    nombre:'', 
    email:'',
    mensaje:''
}

const nombre =document.querySelector('#nombre');
const email=document.querySelector('#email');
const mensaje=document.querySelector('#mensaje');
const formulario=document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//El evento del submit

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    //validar el formulario
    // console.log('hola');
    const{nombre, email, mensaje}=datos;
    if(nombre===''||email===''||mensaje===''){
        mostrarAlerta('Todos los campos son obligatorios',true);
        return; //corta la ejecucion
    }
    mostrarAlerta('Datos enviados correctamente');

    //enviar formulario
});

function leerTexto(e){
    //console.log(e.target.value);
    datos[e.target.id]=e.target.value;

    // console.log(datos);
}

function mostrarAlerta(mensaje, error = null){
    const alerta= document.createElement('P');//escribirlo en mayusculas
    alerta.textContent=mensaje;
    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);

    //desaparezca después
    setTimeout(()=>{
        alerta.remove();
    },5000);
}