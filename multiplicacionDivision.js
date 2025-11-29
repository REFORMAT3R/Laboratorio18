const multiplicar = (a, b) => a * b;
export default multiplicar;

export const dividir = (a, b) => {
    if(b === 0) {
        throw new Error("No se puede dividir entre 0");
    }
    return a / b;
}