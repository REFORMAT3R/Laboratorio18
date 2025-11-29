async function cargarUsuarios() {
    try{
        let respuesta = await fetch("https://jsonplaceholder.typicode.com/users");

        let usuarios = await respuesta.json();

        usuarios.forEach(element => { 
            console.log(element.name);
        });
    }
    catch(error) {
        console.log("Error:", error.message);
    }
}
cargarUsuarios();