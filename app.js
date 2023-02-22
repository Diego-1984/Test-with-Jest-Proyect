const sum = (a,b) => {
    return a + b}
    console.log(sum(7,3))
    module.exports={sum};

    const fromEuroToDollar = function(valueInEuro){
        // convertimos el valor a dolares
        let valueInDollar = valueInEuro * 1.2;
        // retornamos el valor
        return valueInDollar;
    }
    module.exports = { sum, fromEuroToDollar }

    const fromDollarToYen = function(valueInYen){
        // convertimos el valor a dolares
        let valueInDollar = valueInYen * 1.2;
        // retornamos el valor
        return valueInYen;
    }
    module.exports = { sum, fromEuroToDollar }