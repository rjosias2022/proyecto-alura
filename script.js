let accion1 = document.getElementById("btn-desencriptar");
let accion2 = document.getElementById("btn-encriptar");

accion1.addEventListener("click", desencriptar);


function desencriptar() {
    event.preventDefault()

    let textoencriptar = document.getElementById("input-texto");
    let palabra = textoencriptar.value
    let nuevalet = palabra.replaceAll("imes", "i");
    let letra = nuevalet;
    let abc = letra.replaceAll("ai", "a");
    let nuevaPal = abc.replaceAll("ober", "o");
    let final = nuevaPal.replaceAll("ufat", "u");
    let final2 = final.replaceAll("enter", "e");

    alert(final2);

    document.getElementById('msg').value = final2
    document.getElementById("input-texto").value=""

}

accion2.addEventListener("click", encriptar);

function encriptar() {
    event.preventDefault()
    let textodesencriptar = document.getElementById("input-texto");
    let palabra2 = textodesencriptar.value.replace("e", "enter").replace("i", "imes").replace("a", "ai").replace("o", "ober").replace("u", "ufat");
    
    
    alert(palabra2);

    document.getElementById('msg').value = palabra2
    document.getElementById("input-texto").value=""
    
}  



const btnCopy = document.getElementById('btn-copy');
 btnCopy.addEventListener('click',copiar);
  function copiar() { 
      var copiado =document.getElementById('msg');
         copiado.select(); 
      document.execCommand("copy");

      alert("mensaje copiado exitosamente ")
 } 
 function copiar() {
    var copiado =document.getElementById('msg');
    copiado.select();
    document.execCommand("copy");
    copiado.value= " ";
}

/* Reglas de encriptación: 
"e" es connvertido para "enter" 
"i" es connvertido para "imes"
"a" es connvertido para "ai"
"o" es connvertido para "ober"
"u" es connvertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/
