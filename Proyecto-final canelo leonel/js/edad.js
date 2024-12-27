const verificarEdadElement = document.getElementById("verificarEdad");

function verificarEdad() {
    let edad = parseInt(prompt('Ingrese su edad:'));
    if (edad < 18) {
      alert(`Prohibido la venta de bebidas alcohólicas a menores de 18 años`);
      window.location.href = ("https://www.argentina.gob.ar/justicia/derechofacil/leysimple/lucha-contra-el-alcoholismo");
      return false;
    } else if (edad >= 18) {
      alert(`Bienvenido!!!`);
      return true;
    }

  }
  
  // Llama a la función al cargar la página
  verificarEdad();
