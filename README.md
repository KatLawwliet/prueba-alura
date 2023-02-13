# Encriptador de mensajes
Este proyecto es un encriptador de mensajes en JavaScript que permite encriptar y desencriptar texto.

#Funcionamiento

El programa utiliza un diccionario de llaves para realizar la encriptación y desencriptación del texto. 
Este diccionario consta de cinco parejas de valores:

{   e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
  }

°La función encriptar() utiliza el diccionario para reemplazar cada letra del texto de entrada con su equivalente en el diccionario. 

°La función desencriptar() hace lo contrario, reemplazando cada valor en el diccionario con su letra correspondiente.

-Además, se ha implementado una función copiarResultado() que utiliza la biblioteca clipboard.js para permitir al usuario 
copiar el resultado a su portapapeles.

#Limitaciones

El programa solo acepta minúsculas y sin acentos en el texto de entrada.

#Uso

1-Abrir el archivo index.html en un navegador web.
2-Escribir el texto que se desea encriptar o desencriptar en el campo de texto en la sección "Panel izquierdo".
3-Hacer clic en el botón "Encriptar" o "Desencriptar" para realizar la operación deseada.
4-El resultado se mostrará en el campo de texto en la sección "Panel derecho".
5-Hacer clic en el botón "Copiar" para copiar el resultado al portapapeles.

#Notas

El programa utiliza la biblioteca clipboard.js para la función de copiado al portapapeles.
La estructura y diseño de la página se han realizado mediante HTML y CSS.
El programa fue escrito en JavaScript y se ejecuta en el cliente (navegador web).




