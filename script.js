// Declaramos un diccionario que almacene las "llaves" de encriptación
// const : crea una constante cuyo alcance puede ser global o local para el bloque en el que se declara.
const encryptionKey = {   
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
  };
  
  // Funcion para encriptar el texto
  function encriptar() {
      let inputText = document.getElementById("texto-entrada").value;  
      inputText = inputText.split('').map(c => encryptionKey[c] || c).join('');  
      document.getElementById("texto-salida").value = inputText;  
        // Let: permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando.
        // split: El método split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas. 
        // join: une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
        //map :para iterar a través de los elementos dentro de una colección de arreglos en JavaScript.
        
  }
  
  // Funcion para desencriptar el texto
  function desencriptar() {
      let inputText = document.getElementById("texto-entrada").value;
      for (let key in encryptionKey) {
          inputText = inputText.split(encryptionKey[key]).join(key);
      }
      document.getElementById("texto-salida").value = inputText;

  }
 
  //Funcion para copiar el texto usando libreria clipboard
  function copiarResultado() {
    var text = document.getElementById("texto-salida").value;
    var clipboard = new ClipboardJS("#copiar-resultado", {
        text: function() {
            return text;
        }});
    clipboard.on("success", function(e) {
        document.getElementById("status").innerHTML = "Texto copiado al portapapeles";
    });
    clipboard.on("error", function(e) {
        document.getElementById("status").innerHTML = "Error al copiar al portapapeles";
    });

    document.getElementById("copiar-resultado").onclick = function(){
        copiarResultado();
    }
    document.getElementById("texto-mensaje-vacio").hidden = true;
}



  