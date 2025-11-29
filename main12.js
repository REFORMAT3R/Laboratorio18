const regex = /^(0[1-9]|[12][0-9]|30)\/(0[1-9]|1[0-2])\/\d+$/;
console.log(regex.test("30/11/2025")); 
console.log(regex.test("31/11/2025"));   
console.log(regex.test("29/02/22"));    
console.log(regex.test("15/05/3"));      