const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

console.log(regex.test("Hola1234")); 
console.log(regex.test("hola1234"));   
console.log(regex.test("HOLA1234"));   
console.log(regex.test("HolaHola"));   