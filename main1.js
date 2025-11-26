function cargarUsuario() {
    fetch("https://jsonplaceholder.typicode.com/users/10")
        .then(res => res.json())
        .then(data => {
            console.log("Nombre:", data.name);
            console.log("Username:", data.username);
            console.log("Email:", data.email);
        })
        .catch(err => console.error("Error:", err));
}

cargarUsuario();