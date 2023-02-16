let preguntas = [
  {
    pregunta: "¿Si ves un robo a quién llamas?",
    correcto: "Policia 911",
    incorrecto: "Bomberos 131",
    incorrecto2: "Sanidad 107 ",
  },
  {
    pregunta: "¿Si ves un incendio a quién llamas?",
    incorrecto: "Policia 911",
    correcto: "Bomberos 131",
    incorrecto2: "Sanidad 107 ",
  },
  {
    pregunta: "¿Si consigues un animal salvaje en tu casa a quién llamas?",
    incorrecto: "Policia 911",
    incorrecto2: "Bomberos 131",
    correcto: "Control animal 222 ",
  },
];

let myname = null;
let large = 0;
let correcto = 0;
let incorrecto = 0;
let valor = preguntas.length;

function cambiando(respuesta) {
  let nuevo = document.getElementsByClassName("buttonOption");
  for (let item = 0; item < nuevo.length; item++) {
    nuevo[item].setAttribute("disabled", "true");
    nuevo[item].setAttribute("style", "background-color: #979797;");
  }
  document.getElementById(respuesta).classList.add("seleccion");
  if (respuesta === "correcto") {
    correcto += 1;
  } else {
    incorrecto += 1;
  }
}
let cantidadPreguntas = document.getElementById("cantidadPreguntas");
let boton = document.querySelector("button");

boton.addEventListener("click", () => {
  let inputName = document.getElementById("name");
  if (inputName !== null) {
    myname = inputName.value;
    document.getElementById("cambio").innerHTML = `Hola ${myname}`;
    document.getElementById("parrafo").innerHTML =
      "¿Quieres comenzar la trivia?";
    document.getElementById("button").innerHTML = "COMENCEMOS";
    cantidadPreguntas.innerHTML = `Preguntas totales ${valor}`;
  } else {
    document.getElementById("cambio").innerHTML = `Muchas Suerte ${myname}`;
    // OCULTO EL BOTON PARA QUE EL CONOMETRO SE ENCARGE DE PASAR CADA PREGUNTA
    document.getElementById("button").setAttribute("style", "display:none;");
    let questions = document.getElementById("parrafo");

    questions.innerHTML = "";
    if (large < valor) {
      for (let elemento in preguntas[large]) {
        if (elemento == "pregunta") {
          questions.innerHTML += `<h1> ${preguntas[large][elemento]} </h1>`;
        } else {
          questions.innerHTML += `<button class="buttonOption" id="${elemento}" onclick="cambiando('${elemento}')" > ${preguntas[large][elemento]} </button>`;
        }
      }
      large += 1;

      //CRONOMETRO
      let count = 5;
      let timer = document.getElementById("time");
      timer.innerHTML = `<h3>${count}s</h3>`;
      let interval = setInterval(function(){
        count -= 1;
        timer.innerHTML = `<h3>${count}s</h3>`;
      }, 1000);

      setTimeout(function(){
        timer.innerHTML = "";
        boton.click();
        clearInterval(interval);
      }, 5000);
      // MOSTRAR LA CANTIDAD DE PREGUNTAS CON LA PREGUNTA EN LA QUE VA EL USUARIO
      cantidadPreguntas.innerHTML = `Preguntas totales ${large}/${valor}`;
    } else {
      cantidadPreguntas.innerHTML = "";
      document.getElementById("cambio").innerHTML = `Haz Terminado ${myname}`;
      if (correcto === valor) {
        questions.innerHTML += `<h1>Felicitaciones Excelentes Resultado!!</h1>
        <h2>Respuestas Correctas: ${correcto}</h2>
        <h2>Respuestas Incorrectas: ${incorrecto}</h2>`;
      } else if (correcto < 3 && correcto > 1) {
        questions.innerHTML += `<h1>Buen trabajo pero podemos mejorar!!</h1>
        <h2>Respuestas Correctas: ${correcto}</h2>
        <h2>Respuestas Incorrectas: ${incorrecto}</h2>`;
      } else {
        questions.innerHTML += `<h1>Upsss debemos mejorar!!</h1>
        <h2>Respuestas Incorrectas: ${incorrecto}</h2>
        <h2>Respuestas Correctas: ${correcto}</h2>
        `;
      }
      document.getElementById("button").setAttribute("style", "display:block;");
      document.getElementById("button").innerHTML = "Finalizar";
      document.getElementById("button").setAttribute("id", "reload");
      let reload = document.getElementById("reload");
      reload.addEventListener("click", () => {
        location.reload();
      });
    }
  }
});
