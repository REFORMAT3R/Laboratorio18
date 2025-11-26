async function cargarUsuario() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/10");
        const data = await res.json();
        console.log("Nombre:", data.name);
        console.log("Username:", data.username);
        console.log("Email:", data.email);
    } catch (err) {
        console.error("Error:", err);
    }
}

cargarUsuario();