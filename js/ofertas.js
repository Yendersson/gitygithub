if(localStorage.getItem("username")){
    
    document.getElementById("sesion").href = "index.html";
    document.getElementById("inicio").innerText = "salir";

    document.getElementById("inicio").onclick = function(){
        localStorage.removeItem("username");
        localStorage.removeItem("token");
        localStorage.removeItem("carrito")
    }
}

    fetch("http://localhost:1337/ecommerces")
.then(regresar => regresar.json())
.then(datos => {
    console.log(datos);
    const informacion = datos;
    console.log(informacion);
    const filtro = informacion.filter(producto => producto.tipo === "oferta");

    const div = document.getElementById("ofertas");
    filtro.forEach(element => {
        let etiqueta_Padre = document.createElement("div");
        let nombre = document.createElement("p");
        let precio = document.createElement("p");
        let img = document.createElement("img");
        let link = document.createElement("a");

        etiqueta_Padre.className = "card";
        img.className = "img-producto";
        link.className = "ver-producto"
        //precio.className = precio;

        img.src = "http://localhost:1337" + element.imagen.url;
        nombre.innerText = element.description;
        precio.innerText = `${element.price}$`;
        link.innerText = "Ver producto...";

        link.href = "producto.html?id="+ element.id;

        div.appendChild(etiqueta_Padre);
        etiqueta_Padre.appendChild(img);
        etiqueta_Padre.appendChild(nombre);
        etiqueta_Padre.appendChild(precio);
        etiqueta_Padre.appendChild(link);

    })
})