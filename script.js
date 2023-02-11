const textArea = document.querySelector(".text-area");

const mensaje = document.querySelector(".mensaje");



function btnEncriptar(){
    const textEncriptado = encriptar(textArea.value);
    mensaje.value = textEncriptado;
    textArea.value="";
    document.getElementById("caja").style.display = "none";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }
    }
    return stringEncriptado;
}

function btnDesencriptar(){
    const textDesencriptado = desencriptar(textArea.value);
    mensaje.value = textDesencriptado;
    textArea.value="";

}


function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][0])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

        }
    }
    return stringDesencriptado;
}

const copiar = document.querySelector(".copiar");
copiar.addEventListener("click", copyToClipboard);


function copyToClipboard(){
    const textToCopy = document.querySelector(".mensaje").value;

    const tempInput = document.createElement("input");
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand("copy");

    document.body.removeChild(tempInput);
    
    mensaje.value="";
}

