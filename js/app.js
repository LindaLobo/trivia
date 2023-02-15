let preguntas = [
  {
    pregunta: "¿si ves un robo a quien llamas?",
    correcto: "carabineros 911",
    incorrecto: "los bomberos 131",
    incorrecto2: "sanidad 107 ",
  },
  {
    pregunta: "¿Si ves un incendio a quien llamas?",
    incorrecto: "carabineros 911",
    correcto: "los bomberos 131",
    incorrecto2: "sanidad 107 ",
  },
  {
    pregunta: "¿si consigues un animal salvaje en tu casa a quien llamas?",
    incorrecto: "carabineros 911",
    incorrecto2: "los bomberos 131",
    correcto: "control animal 222 ",
  },
];

let large = 0;
let correcto = 0;
let incorrecto = 0;

let valor = preguntas.length;
console.log(valor);

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


let boton = document.querySelector("button");
boton.addEventListener("click", function () {
  let name = document.getElementById("name");
  if (name !== null) {
    document.getElementById("cambio").innerHTML = `Hola ${name.value}`;
    document.getElementById("parrafo").innerHTML =
      "¿Quieres comenzar la trivia?";
    document.getElementById("button").innerHTML = "COMENCEMOS";
  } else {
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
      document.getElementById("button").innerHTML = "Continuar";
    } else {
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
      document.getElementById("button").innerHTML = "Finalizar";
      document.getElementById("button").setAttribute("id","reload")
      const reload = document.getElementById('reload');
      reload.addEventListener('click', _ => { // el _ es para indicar la ausencia de parametros
        location.reload();
    });
    }
  }
});
