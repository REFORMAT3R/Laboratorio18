async function cargarUsuario() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/10");
        const data = await res.json();
        console.log("Nombre:", data.name);
    } catch (err) {
        console.error("Error:", err);
    }
}

cargarUsuario();