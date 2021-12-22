const form = document.getElementById("formRegistro");

        form.onsubmit = (event) => {
            event.preventDefault()
            console.log(form.user.value);

            if (form.password.value === form.password2.value) {

                fetch("http://localhost:1337/auth/local/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: form.user.value,
                        email: form.email.value,
                        password: form.password.value
                    })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        window.location.href = "login.html";
                    })
                    .catch(error => alert("ha ocurrido un error",error));

            } else {
                alert("Las contraseñas no coinciden");
            }
        }