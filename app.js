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

    const fromEuroToYen = function(valueInEuro){
        // convertimos el valor a yenes
        let valueInYen = valueInEuro * 127.9;
        // retornamos el valor
        return valueInYen;
    }
    module.exports = { sum, fromEuroToYen }

    const fromEuroToPound = function(valueInEuro){
        // convertimos el valor a libras
        let valueInPound = valueInEuro * 0.8;
        // retornamos el valor
        return valueInPound;
    }
    module.exports = { sum, fromEuroToPound }

    // A partir de aqui empiezan los problemas

    const fromDollarToYen = function(valueInYen){
        // convertimos el valor a libras
        let valueInYen = fromEuroToYen() * fromEuroToDollar();
        // retornamos el valor
        return valueInYen;
    }
    module.exports = { sum, fromDollarToYen }

    const fromYenToPound = function(valueInPound){
        // convertimos el valor a libras
        let valueInPound = fromEuroToYen() / fromEuroToPound();
        // retornamos el valor
        return valueInPound;
    }
    module.exports = { sum, fromYenToPound }