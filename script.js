/*const edad=2;
let n=0;
//alert(edad)
//entrada: prompt
//salida: console.log
//entrada y salida: DOM Document

n = prompt('Qué número quieres multiplicar a 2')
console.log(edad*n)

console.log(['Frida', 'Camila', 'Fer'].sort())*/

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hello World!')
    .pauseFor(300)
    .deleteAll()
    .typeString('Soy Fer Escalona')
    .pauseFor(300)
    .deleteChars(12)
    .typeString('desarrolladora Frontend Jr')
    .pauseFor(300)
    .start();