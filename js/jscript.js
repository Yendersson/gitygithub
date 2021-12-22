

const ubicacion = document.getElementById("localidad");
const productos = document.getElementById("producto");

ubicacion.onclick = function () {

    const lista = document.getElementById("li-ubicacion");

    lista.classList.toggle("ocultar");
}

productos.onclick = function () {

    const lista = document.getElementById("li-producto");

    lista.classList.toggle("ocultar");
}

    const botonOferta = document.getElementById("ver-oferta");
    botonOferta.onclick = function(){
        window.location.href = "ofertas.html";
    }
/***********************************************BIENVENIDA*************************************** */
const bienvenida = document.getElementById("bienvenida")

    if(localStorage.getItem("username")){
        const saludo = "Hola, Bienvenid@ " + localStorage.getItem("username");
        document.getElementById("bienvenida-usuario").className = "bienvenida";
        bienvenida.innerText = saludo;

        document.getElementById("sesion").href = "index.html";
        document.getElementById("inicio").innerText = "salir";

        document.getElementById("inicio").onclick = function(){
            localStorage.removeItem("username");
            localStorage.removeItem("token");
            localStorage.removeItem("carrito")
            localStorage.removeItem("idUsername")
        }
    }else{
        document.getElementById("bienvenida-usuario").className = "ocultar";
    }



/******************************************************************DESTACADOS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

fetch("http://localhost:1337/ecommerces")
    .then(regresar => regresar.json())
    .then(datos => {
        console.log(datos);
        const informacion = datos;
        console.log(informacion);
        const filtro = informacion.filter(producto => producto.tipo === "destacados");

        const div = document.getElementById("destacados");
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

//***************************************************************CATEGORIAS+++++++++++++++++++++++++++++++++++++++++++ */
let categoria_1 = document.getElementById("cat-1");

let produccion = document.getElementById("produccion");

let contador = 0;
categoria_1.onclick = function () {
    if (produccion.className === "ocultar") {
        produccion.className = "contenido-2";

        if (contador == 0) {
            fetch("http://localhost:1337/ecommerces")
                .then(resolve => resolve.json())
                .then(datos => {
                    console.log(datos)
                    const informacion = datos;

                    const filtro = informacion.filter(producto => producto.categoria === 1);

                    const div = document.getElementById("produccion");

                    filtro.forEach(nombre => {

                        let etiqueta_Padre = document.createElement("div");
                        let img = document.createElement("img");
                        let name = document.createElement("p");
                        let precio = document.createElement("p");
                        let link = document.createElement("a");

                        etiqueta_Padre.className = "card";
                        img.className = "img-producto";
                        link.className = "ver-producto"

                        img.src = "http://localhost:1337" + nombre.imagen.url;
                        name.innerText = nombre.description;
                        precio.innerText = `${nombre.price}$`;
                        link.innerText = "Ver producto...";

                        link.href = "producto.html?id="+ nombre.id;

                        div.appendChild(etiqueta_Padre);
                        etiqueta_Padre.appendChild(img);
                        etiqueta_Padre.appendChild(name);
                        etiqueta_Padre.appendChild(precio);
                        etiqueta_Padre.appendChild(link);
                    })
                })

            contador++;
        }
    } else {
        produccion.className = "ocultar";

    }
}

let categoria_2 = document.getElementById("cat-2");

let produccion2 = document.getElementById("produccion-2");

let contador2 = 0;
categoria_2.onclick = function () {
    if (produccion2.className === "ocultar") {
        produccion2.className = "contenido-2";

        if (contador2 == 0) {
            fetch("http://localhost:1337/ecommerces")
                .then(resolve => resolve.json())
                .then(datos => {
                    console.log(datos)
                    const informacion = datos;

                    const filtro = informacion.filter(producto => producto.categoria === 2);

                    const div = document.getElementById("produccion-2");

                    filtro.forEach(nombre => {

                        let etiqueta_Padre = document.createElement("div");
                        let img = document.createElement("img");
                        let name = document.createElement("p");
                        let precio = document.createElement("p");
                        let link = document.createElement("a");

                        etiqueta_Padre.className = "card";
                        img.className = "img-producto";
                        link.className = "ver-producto"

                        img.src = "http://localhost:1337" + nombre.imagen.url;
                        name.innerText = nombre.description;
                        precio.innerText = `${nombre.price}$`;
                        link.innerText = "Ver producto...";

                        link.href = "producto.html?id="+ nombre.id;

                        div.appendChild(etiqueta_Padre);
                        etiqueta_Padre.appendChild(img);
                        etiqueta_Padre.appendChild(name);
                        etiqueta_Padre.appendChild(precio);
                        etiqueta_Padre.appendChild(link);
                    })
                })

            contador2++;
        }
    } else {
        produccion2.className = "ocultar";

    }
}

let categoria_3 = document.getElementById("cat-3");

let produccion3 = document.getElementById("produccion-3");

let contador3 = 0;
categoria_3.onclick = function () {
    if (produccion3.className === "ocultar") {
        produccion3.className = "contenido-2";

        if (contador3 == 0) {
            fetch("http://localhost:1337/ecommerces")
                .then(resolve => resolve.json())
                .then(datos => {
                    console.log(datos)
                    const informacion = datos;

                    const filtro = informacion.filter(producto => producto.categoria === 3);

                    const div = document.getElementById("produccion-3");

                    filtro.forEach(nombre => {

                        let etiqueta_Padre = document.createElement("div");
                        let img = document.createElement("img");
                        let name = document.createElement("p");
                        let precio = document.createElement("p");
                        let link = document.createElement("a");

                        etiqueta_Padre.className = "card";
                        img.className = "img-producto";
                        link.className = "ver-producto"

                        img.src = "http://localhost:1337" + nombre.imagen.url;
                        name.innerText = nombre.description;
                        precio.innerText = `${nombre.price}$`;
                        link.innerText = "Ver producto...";

                        link.href = "producto.html?id="+ nombre.id;

                        div.appendChild(etiqueta_Padre);
                        etiqueta_Padre.appendChild(img);
                        etiqueta_Padre.appendChild(name);
                        etiqueta_Padre.appendChild(precio)
                        etiqueta_Padre.appendChild(link);
                    })
                })

            contador3++;
        }
    } else {
        produccion3.className = "ocultar";

    }
}

let categoria_4 = document.getElementById("cat-4");

let produccion4 = document.getElementById("produccion-4");

let contador4 = 0;
categoria_4.onclick = function () {
    if (produccion4.className === "ocultar") {
        produccion4.className = "contenido-2";

        if (contador4 == 0) {
            fetch("http://localhost:1337/ecommerces")
                .then(resolve => resolve.json())
                .then(datos => {
                    console.log(datos)
                    const informacion = datos;

                    const filtro = informacion.filter(producto => producto.categoria === 4);

                    const div = document.getElementById("produccion-4");

                    filtro.forEach(nombre => {

                        let etiqueta_Padre = document.createElement("div");
                        let img = document.createElement("img");
                        let name = document.createElement("p");
                        let precio = document.createElement("p");
                        let link = document.createElement("a");

                        etiqueta_Padre.className = "card";
                        img.className = "img-producto";
                        link.className = "ver-producto"

                        img.src = "http://localhost:1337" + nombre.imagen.url;
                        name.innerText = nombre.description;
                        precio.innerText = `${nombre.price}$`;
                        link.innerText = "Ver producto...";

                        link.href = "producto.html?id="+ nombre.id;

                        div.appendChild(etiqueta_Padre);
                        etiqueta_Padre.appendChild(img);
                        etiqueta_Padre.appendChild(name);
                        etiqueta_Padre.appendChild(precio)
                        etiqueta_Padre.appendChild(link);
                    })
                })

            contador4++;
        }
    } else {
        produccion4.className = "ocultar";

    }
}

let categoria_5 = document.getElementById("cat-5");

let produccion5 = document.getElementById("produccion-5");

let contador5 = 0;
categoria_5.onclick = function () {
    if (produccion5.className === "ocultar") {
        produccion5.className = "contenido-2";

        if (contador5 == 0) {
            fetch("http://localhost:1337/ecommerces")
                .then(resolve => resolve.json())
                .then(datos => {
                    console.log(datos)
                    const informacion = datos;

                    const filtro = informacion.filter(producto => producto.categoria === 5);

                    const div = document.getElementById("produccion-5");

                    filtro.forEach(nombre => {

                        let etiqueta_Padre = document.createElement("div");
                        let img = document.createElement("img");
                        let name = document.createElement("p");
                        let precio = document.createElement("p");
                        let link = document.createElement("a");

                        etiqueta_Padre.className = "card";
                        img.className = "img-producto";
                        link.className = "ver-producto"

                        img.src = "http://localhost:1337" + nombre.imagen.url;
                        name.innerText = nombre.description;
                        precio.innerText = `${nombre.price}$`;
                        link.innerText = "Ver producto...";

                        link.href = "producto.html?id="+ nombre.id;

                        div.appendChild(etiqueta_Padre);
                        etiqueta_Padre.appendChild(img);
                        etiqueta_Padre.appendChild(name);
                        etiqueta_Padre.appendChild(precio)
                        etiqueta_Padre.appendChild(link);
                    })
                })

            contador5++;
        }
    } else {
        produccion5.className = "ocultar";

    }
}


