document.getElementById("btnCargar").addEventListener("click", async function() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/2");
        const usuario = await respuesta.json();

        document.getElementById("nombre").textContent = usuario.name;
        document.getElementById("email").textContent = usuario.email;
        document.getElementById("ciudad").textContent = usuario.address.city;
    }
    catch(error) {
        console.log("Error:", error.message);
    }
});