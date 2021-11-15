let destacados = [
    {foto: "https://http2.mlstatic.com/D_NQ_NP_893900-CBT44148851439_112020-O.jpg",
    nombre: "Teclado Mecánico Con Cable 87 Teclas Mixta De Luz Mecánica",
    envio: "Envio gratis",
    precio: "45 USD"},

    {foto: "http://http2.mlstatic.com/D_917555-MLA42079333354_062020-O.jpg",
    nombre: "Mouse de juego Logitech G Series Hero G403 negro",
    envio: "Envio gratis",
    precio: "24,79 USD"},

    {foto: "https://www.sharecomputacion.com/wp-content/uploads/2020/06/combo-actualizacion-amd-ryzen-3-2200g-a320-8gb-envio-d_nq_np_679526-mla31024992330_062019-f1-85d546ac4035ce1d9d15682127973111-1024-1024-1.jpg",
    nombre: "COMBO GAMER-Ryzen 3200 + 8GB-RAM + Asus-A320M",
    envio: "Envio gratis",
    precio: "315 USD"},

    {foto: "https://i.blogs.es/de1813/0c743d40-c718-4cdb-bf06-a70b1823d79e/450_1000.jpeg",
    nombre: "GeForce GTX 16 Series GTX 1650.... Edition 4GB",
    envio: "Envio gratis",
    precio: "600 USD"}

    ];

    function informacion(posicion, etiqueta){

   
    let img = document.createElement("img");
    let descirpcion = document.createElement("h3");
    let encomienda = document.createElement("p");
    let price = document.createElement("p");

    img.className = "img-producto"; 

    price.className = "precio";
    
    img.src = destacados[posicion].foto;
    descirpcion.innerText = destacados[posicion].nombre;
    encomienda.innerText = destacados[posicion].envio;
    price.innerText = destacados[posicion].precio;
    
    etiqueta.appendChild(img);
    etiqueta.appendChild(descirpcion);
    etiqueta.appendChild(encomienda);
    etiqueta.appendChild(price);

    }

    for(let i = 0; i < destacados.length; i++){

        if(i == 0){
            let etiqueta = document.getElementById("destacado-1");
            informacion(i, etiqueta);

        }else if(i == 1){
            let etiqueta = document.getElementById("destacado-2");
            informacion(i, etiqueta);

        }else if(i == 2){
            let etiqueta = document.getElementById("destacado-3");
            informacion(i, etiqueta);

        }else if(i == 3){
            let etiqueta = document.getElementById("destacado-4");
            informacion(i, etiqueta);

        }
    }