const html = "<h1>Hola</h1>";
const textoPlano = html.replace(/<[^>]+>/g, "");
console.log(textoPlano);  
