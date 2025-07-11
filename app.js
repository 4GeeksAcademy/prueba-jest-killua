const sum = (a, b) => {
    return a + b;
}

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

module.exports = { sum, fromEuroToDollar };
