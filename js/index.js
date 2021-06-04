const formulario = document.querySelector("form");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const datos = {
    nombre: "",
    login: "",
    contrasenya: "",
    email: "",
    tipoProgramador: "",
    bichos: "",
    recordar: false,
  };
  datos.nombre = formulario.querySelector("#nombre").value;
  datos.login = formulario.querySelector("#login").value;
  datos.contrasenya = formulario.querySelector("#contrasenya").value;
  datos.email = formulario.querySelector("#email").value;
  datos.tipoProgramador = formulario.querySelector("#tipo-programador").value;
  datos.bichos = formulario.querySelector("#perretes:checked")
    ? "perretes"
    : "gatetes";
  datos.recordar = formulario.querySelector("#recordar").value === "on";

  console.log(datos);
});

formulario.addEventListener("input", (e) => {
  console.log("Se está tecleando ", e.target.value);
});

formulario
  .querySelector("#tipo-programador")
  .addEventListener("change", (e) => {
    console.log(e);
    if (e.target.value === "back") {
      formulario
        .querySelector(".confirmacion-tipo-programador")
        .classList.add("on");
    } else {
      formulario
        .querySelector(".confirmacion-tipo-programador")
        .classList.remove("on");
    }
  });

setTimeout(() => {
  const input = document.createElement("input");
  input.type = "text";
  input.id = "nuevo-dato";
  input.placeholder = "Introduce aquí el dato que te dé la gana";
  formulario.append(input);
}, 2000);
