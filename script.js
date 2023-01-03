document.addEventListener("DOMContentLoaded",()=>{

    var encriptar = document.querySelector(".encriptar-texto");
    var desencriptar = document.querySelector(".desencriptar-texto");

    function EncriptarTexto(){
        var texto = document.querySelector(".input-texto").value;
        console.log(texto);
        if (texto == "" || texto == null) {
            document.querySelector(".Texto-Desencriptar").innerHTML=`<img src="resources/Muñeco.png"/>
            <p>Ningun Mensaje fue encontrado</p>
            <p>Ingrese el texto que desee encriptar o desencriptar</p>`;
            return false;
        }
        if(!ValidadorMinusculasCaracteres(texto)){
            document.querySelector(".Texto-Desencriptar").innerHTML=`<img src="resources/Muñeco.png"/>
            <p>Texto erroeno! Recuerde que no se permiten mayúsculas ni caracteres especiales</p>
            <p>Ingrese el texto que desee encriptar o desencriptar</p>`;
            return false;
        }
        var textoEncriptado = Encriptador(texto);
        document.querySelector(".Texto-Desencriptar").innerHTML=`<p class="texto-mostrar">${textoEncriptado}</p>
        <button class="copiar-texto">Copiar</button>`;
        var copiarTexto = document.querySelector(".copiar-texto");
        copiarTexto.onclick = copyTextToClipboard;
        return true;
    }

    function DesencriptarTexto(){
        var texto = document.querySelector(".input-texto").value;
        console.log(texto);
        if (texto == "" || texto == null) {
            document.querySelector(".Texto-Desencriptar").innerHTML=`<img src="resources/Muñeco.png"/>
            <p>Ningun Mensaje fue encontrado</p>
            <p>Ingrese el texto que desee encriptar o desencriptar</p>`;
            return false;
        }
        if(!ValidadorMinusculasCaracteres(texto)){
            document.querySelector(".Texto-Desencriptar").innerHTML=`<img src="resources/Muñeco.png"/>
            <p>Texto erroeno! Recuerde que no se permiten mayúsculas ni caracteres especiales</p>
            <p>Ingrese el texto que desee encriptar o desencriptar</p>`;
            return false;
        }
        var textoEncriptado = Desencriptador(texto);
        document.querySelector(".Texto-Desencriptar").innerHTML=`<p class="texto-mostrar">${textoEncriptado}</p>
        <button class="copiar-texto">Copiar</button>`;
        var copiarTexto = document.querySelector(".copiar-texto");
        copiarTexto.onclick = copyTextToClipboard;
        return true;
    }

    function Encriptador(texto){
        var textoEncriptado = "";
        texto.split("").forEach(element => {
            if(element!="a" && element!="e" && element!="i" && element!="o" && element!="u"){
                textoEncriptado=textoEncriptado+element;
            }
            if(element=="a"){
                textoEncriptado=textoEncriptado+"ai";
            }
            if(element=="e"){
                textoEncriptado=textoEncriptado+"enter";
            }
            if(element=="i"){
                textoEncriptado=textoEncriptado+"imes";
            }
            if(element=="o"){
                textoEncriptado=textoEncriptado+"ober";
            }
            if(element=="u"){
                textoEncriptado=textoEncriptado+"ufat";
            }
            
        });
        return textoEncriptado;
    }

    function Desencriptador(texto){
        var textoDesencriptado=""; 
       textoDesencriptado = texto.replace("ai",'a');
       textoDesencriptado = textoDesencriptado.replace("enter","e");
       textoDesencriptado = textoDesencriptado.replace("imes","i");
       textoDesencriptado = textoDesencriptado.replace("ober","o");
       textoDesencriptado = textoDesencriptado.replace("ufat","u");
        return textoDesencriptado;
    }

    function ValidadorMinusculasCaracteres(texto){
        var validacion = true;
        texto.split("").forEach(e=>{
            if(e.charCodeAt() <97 || e.charCodeAt()>122){
                validacion = false;
            }
        });
        return validacion;
    }

    async function copyTextToClipboard() {
        var text = document.querySelector(".texto-mostrar").textContent;
        try {
            await navigator.clipboard.writeText(text);
            console.log('Text copied to clipboard');
        } catch (err) {
            console.error('Error in copying text: ', err);
        }
    }

    encriptar.onclick = EncriptarTexto;
    desencriptar.onclick = DesencriptarTexto;
})