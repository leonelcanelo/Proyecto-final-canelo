const contenedorTarjetas = document.getElementById("productos-container")
  
function crearTarjetasProductosInicio(productos) {
    productos.forEach(producto => {
        const nuevaBebidas = document.createElement("div");
        nuevaBebidas.classList = "tarjeta-producto";
        nuevaBebidas.innerHTML = `
         <img src="../img/campari.jpg"${producto.id}.jpg">
         <h3>${producto.nombre}</h3>
         <p>$${producto.precio}</p>
         <button>Agregar al carrito</button>

         `
        contenedorTarjetas.appendChild(nuevaBebidas);
        nuevaBebidas.getElementsByTagName("button")[0].addEventListener("click",()=> agregarAlCarrito(producto))

    });   
}

crearTarjetasProductosInicio(bebidas); 

