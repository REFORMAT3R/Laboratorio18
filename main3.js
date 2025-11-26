function cargarUsuarios() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(usuarios => {
            console.log("Nombres de usuarios:");
            usuarios.forEach(u => console.log(u.name));
        })
        .catch(err => console.error("Error:", err));
}

cargarUsuarios();