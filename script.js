
function enviar(){
    let comentario =document.getElementById("comments").value
    let txt =document.createElement("p")
    let lista = document.getElementById("lista-comentarios");


    txt.textContent=comentario;
    lista.appendChild(txt);

    document.getElementById("comments").value = "";
}

function mudar(){

 let luz =   document.body.classList.toggle('lighttheme');
 
 let logoyt = document.querySelector('.logoyt img');

let tema = document.querySelector('.tema img')

 if(luz){

    tema.src="icons8-moon-and-stars-40.png"
    logoyt.src ="logodafelicidade.png";
 
}else{
    logoyt.src="youtube-logo-png-image.png"

    tema.src="icons8-sun-64.png"
}

}
