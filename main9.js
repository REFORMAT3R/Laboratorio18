const texto = `
https://www.ejemplo.com
https://sub.dominio.org/ruta?param=1
http://inseguro.com porque no es seguro.
`;

const regex = /https:\/\/[^\s"']+/g;
const urlsSeguras = texto.match(regex);
console.log("URLs seguras encontradas:");
console.log(urlsSeguras);