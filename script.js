

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