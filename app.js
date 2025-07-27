

const btnGuardar = document.getElementById("btn-guardar");
const btnReset = document.getElementById("btn-reset")
// Función para cargar preferencias desde LocalStorage
function cargarAjustes() {
  const lang = localStorage.getItem("language");
  const theme = localStorage.getItem("theme");
  const checkbx = localStorage.getItem("checkbox");
  const inpt = localStorage.getItem("text");
  console.log(document.getElementById("checkbox").checked);
  

  if (lang) document.getElementById("language").value = lang;
  if (theme) {
    document.getElementById("theme").value = theme;
    document.body.className = theme;
  }
  
  if (checkbx==='true') {
    document.getElementById("checkbox").checked = true;
  }else{
    document.getElementById("checkbox").checked = false;
  }
   
  

  if (inpt) {
    document.getElementById("text").value = inpt;
  }else{
    document.getElementById("text").value = '';
  }
  
}


// Función para guardar preferencias en LocalStorage
function guardarAjustes() {
  const lang = document.getElementById("language").value;
  const theme = document.getElementById("theme").value;
  const checkbx = document.getElementById("checkbox").checked;
  const inpt = document.getElementById("text").value;

  localStorage.setItem("language", lang);
  localStorage.setItem("theme", theme);
  localStorage.setItem("checkbox", checkbx);
  localStorage.setItem("text", inpt);

  document.body.className = theme;
  alert("Preferencias guardadas correctamente.");
}

function restablecerAjustes() {
  const lang = 'Español';
  const theme = 'Auto';
  const checkbx = null;
  const inpt = '';

  localStorage.setItem("language", lang);
  localStorage.setItem("theme", theme);
  localStorage.setItem("checkbox", checkbx);
  localStorage.setItem("text", inpt);

  alert("Preferencias restablecidas correctamente.");
  cargarAjustes();
}
btnGuardar.addEventListener('click',guardarAjustes)
btnReset.addEventListener('click',restablecerAjustes)
document.getElementById("checkbox").addEventListener('click',()=>{
  console.log(document.getElementById("checkbox").checked);
  
})

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded',cargarAjustes())
