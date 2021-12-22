if (localStorage.getItem("username")) {

    document.getElementById("sesion").href = "index.html";
    document.getElementById("inicio").innerText = "salir";

    document.getElementById("inicio").onclick = function () {
        localStorage.removeItem("username");
        localStorage.removeItem("token");
        localStorage.removeItem("carrito");
        localStorage.removeItem("idUsername");
    }
}

const token = localStorage.getItem("token");
const carrito = localStorage.getItem("carrito");

let total = 0;

if (token) {

    if (carrito) {
        fetch("http://localhost:1337/Carritos/")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                data.forEach(element => {
                    console.log(element)
                    if (element.users_permissions_user.id == localStorage.getItem("idUsername")) {
                        const productos = element.ecommerces;
                        productos.forEach(producto => {
                            console.log(producto);
                            console.log(producto.description);
                            total = total + producto.price;

                            const card = document.createElement("div");
                            const divImg = document.createElement("div");
                            const divText = document.createElement("div");
                            const img = document.createElement("img");
                            const nombre = document.createElement("p");
                            const precio = document.createElement("p");

                            card.className = "producto-carrito";
                            img.className = "img-producto";



                            img.src = "http://localhost:1337" + producto.imagen.url;
                            nombre.innerText = producto.description;
                            precio.innerText = `${producto.price}$`;


                            document.getElementById("producto-carrito").appendChild(card);
                            divImg.appendChild(img);
                            divText.appendChild(nombre)
                            divText.appendChild(precio);
                            card.appendChild(divImg);
                            card.appendChild(divText);
                        })
                    }
                });
                console.log(total);
                const pago = document.createElement("h2");
                pago.innerText = `${total}$`;

                document.getElementById("precio").appendChild(pago);




            })

        const pagar = document.getElementById("comprar");
        pagar.onclick = function () {
            localStorage.removeItem("carrito");
            alert("Compra Exitosa");
            window.location.href = "index.html"
        }




    }


}