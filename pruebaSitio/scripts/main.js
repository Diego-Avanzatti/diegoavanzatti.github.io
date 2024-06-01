

const buttom = document.querySelector("button");
buttom.onclick = function() {
    let name = prompt("¿Cual es tu nombre?");
    alert("Hola " + name + ", encantado de conocerte!! ")

};

/*document.querySelector("html").onclick = function(){
    alert("dejame de pincharme");
}*/

const miImage = document.querySelector("img");
miImage.onclick = function(){
    let miSrc = miImage.getAttribute("src");
    if( miSrc === "images/gato.webp"){
        miImage.setAttribute("src","images/perro.jpg");
    }
    else{
        miImage.setAttribute("src","images/gato.webp");
    }
}

/*document.querySelector(".uno").onclick = function(){
    alert("Hola Mundo!!");

} */

let miBottom = document.querySelector(".uno");
let miTitulo = document.querySelector("h1");

function estableceNombreDeUsuario(){
    let miNombre = prompt("Introduzca su nombre.");
    if(!miNombre){
        estableceNombreDeUsuario();
    }
    else{
        localStorage.setItem("perro", miNombre );
        miTitulo.textContent = " Mi pagina es genial, " + miNombre;
    }
    
}

if( !localStorage.getItem("perro")){
    estableceNombreDeUsuario();
}
else{
    let nombreAlmacenado = localStorage.getItem("perro");
    miTitulo.textContent = "Mi pagina es genial, " + nombreAlmacenado;
}

miBottom.onclick = function(){
    estableceNombreDeUsuario();
}