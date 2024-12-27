const contenedorTarjetas = document.getElementById("productos-container");
const unidadesElement = document.getElementById("unidades");
const precioElement = document.getElementById("precio");
const carritoVacioElement = document.getElementById("carrito-vacio");
const totalesElement = document.getElementById("totales");
const reiniciarCarritoElement = document.getElementById("reiniciar-carrito");

function crearTarjetasProductosInicio() {
    contenedorTarjetas.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("bebidas"));
    console.log(productos);
    if (productos && productos.length > 0) {
        productos.forEach((producto) => {
            const nuevaBebidas = document.createElement("div");
            nuevaBebidas.classList = "tarjeta-producto";
            nuevaBebidas.innerHTML = `
         <img src="../img/campari.jpg"${producto.id}.jpg">
         <h3>${producto.nombre}</h3>
         <p>$${producto.precio}</p>
         <div>
              <button>-</button>
              <span class="cantidad">${producto.cantidad}</span>
              <button>+</button>
         </div>
         `;
            contenedorTarjetas.appendChild(nuevaBebidas);
            nuevaBebidas
                .getElementsByTagName("button")[1]
                .addEventListener("click", (e) => {
                    const cuentaElement = e.target.parentElement.getElementsByTagName("span")["0"]
                    cuentaElement.innertext = agregarAlCarrito(producto);
                    actualizarTotales();
                });
            nuevaBebidas
                .getElementsByTagName("button")[0]
                .addEventListener("click", (e) => {
                    restarAlCarrito(producto);
                    crearTarjetasProductosInicio();
                    actualizarTotales();
                });
        });
    }
}

crearTarjetasProductosInicio();
actualizarTotales();

function actualizarTotales() {
    const productos = JSON.parse(localStorage.getItem("bebidas"));
    let unidades = 0;
    let precio = 0;
    if (productos && productos.length > 0) {
        productos.forEach(producto => {
            unidades += producto.cantidad;
            precio += producto.precio * producto.cantidad;
        })
        unidadesElement.innerText = unidades;
        precioElement.innerText = precio;
    }

}

function revisarMensajevacio() {
    const productos = JSON.parse(localStorage.getItem("bebidas"));
    console.log(productos, productos == true)
    carritoVacioElement.classList.toggle("escondido", productos && productos.length > 0);
    totalesElement.classList.toggle("escondido",!(productos && productos.length > 0));
}

revisarMensajevacio();

reiniciarCarritoElement.addEventListener("click",reiniciarCarrito);
    function reiniciarCarrito(){
    localStorage.removeItem("bebidas");
    actualizarTotales();
    crearTarjetasProductosInicio();
}