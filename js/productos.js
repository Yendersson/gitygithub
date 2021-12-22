
const query = window.location.search;
const parametros = new URLSearchParams(query);
const id = parametros.get("id");

if (localStorage.getItem("username")) {

    document.getElementById("sesion").href = "producto.html?id=" + id;
    document.getElementById("inicio").innerText = "salir";

    document.getElementById("inicio").onclick = function () {
        localStorage.removeItem("username");
        localStorage.removeItem("token");
        localStorage.removeItem("carrito");
        localStorage.removeItem("idUsername");
    }
}

const divProducto = document.getElementById("detalles");

fetch("http://localhost:1337/ecommerces/" + id)
    .then(resultado => resultado.json())
    .then(producto => {
         console.log(producto)
        const h2 = document.createElement("h2")
        const nombre = document.createElement("h1")
        const detalles = document.createElement("p")

        h2.innerText = `${producto.price}$`;
        nombre.innerText = producto.description;
        detalles.innerText = producto.detalles;

        divProducto.appendChild(nombre);
        divProducto.appendChild(h2);
        divProducto.appendChild(detalles)

        if (producto.imagen) {
            const imagen = document.createElement("img");
            imagen.className = "img-producto";
            imagen.src = "http://localhost:1337" + producto.imagen.url;
            document.getElementById("img-producto").appendChild(imagen);
        }
    })




const token = localStorage.getItem("token");
if (token) {
    fetch("http://localhost:1337/users/me", {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
        .then(res => res.json())
        .then(conversion => {
            console.log("mis datos", conversion);

            fetch("http://localhost:1337/carritos/" + conversion.carrito, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(carrito => {
                    console.log("Mi carrito", carrito);
                })
        })
}

const agregar = document.getElementById("agregar");
fetch("http://localhost:1337/ecommerces/" + id)
    .then(res => res.json())
    .then(producto => {
        agregar.onclick = function () {

            if (token) {
                alert("Agregaste un producto al carrito");
                const idCarrito = localStorage.getItem("carrito");
                if (idCarrito) {
                    fetch("http://localhost:1337/carritos/" + idCarrito, {
                        headers: {
                            "Authorization": `Bearer ${token}`,
                            "Content-Type": "application/json"
                        }
                    })
                        .then(res => res.json())
                        .then(carrito => {
                            console.log("Micarrito", carrito);

                            const idsEcommerces = carrito.ecommerces.map(producto => producto.id);
                            idsEcommerces.push(producto.id)
                            fetch("http://localhost:1337/carritos/" + idCarrito, {
                                method: "PUT",
                                headers: {
                                    "Authorization": `Bearer ${token}`,
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    ecommerces: idsEcommerces
                                })
                            })
                                .then(res => res.json())
                                .then(carrito => {
                                    console.log("Micarrito1", carrito);
                                    console.log(producto);
                                })
                        })
                } else {
                    fetch("http://localhost:1337/carritos/", {
                        method: "POST",
                        headers: {
                            "Authorization": `Bearer ${token}`,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            ecommerces: [producto.id],
                            users_permissions_user: localStorage.getItem("idUsername"),
                            cantidad: 1
                        })
                    })
                        .then(res => res.json())
                        .then(carrito => {
                            console.log(producto)
                            console.log("Micarrito2", carrito);
                            localStorage.setItem("carrito", carrito.id);
                        })
                }
            }else{
                alert("Debes iniciar sesion para agregar un producto")
            }
        }
    })


