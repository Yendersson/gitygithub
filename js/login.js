const form = document.getElementById("formLogin");

form.onsubmit = (event) => {
    event.preventDefault()
    console.log(form.email.value);

    fetch("http://localhost:1337/auth/local", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            identifier: form.email.value,
            password: form.password.value
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.error) {
                alert("Usuario o Contraseña invalida");
            } else {
                localStorage.setItem("token", data.jwt);
                localStorage.setItem("username", data.user.username);
                localStorage.setItem("idUsername", data.user.id)
                if (data.user.carrito) {
                    localStorage.setItem("carrito", data.user.carrito.id);
                }
                window.location.href = "index.html";

            }
        })
}

