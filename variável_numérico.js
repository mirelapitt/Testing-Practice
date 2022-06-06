var number = 10.20 // "10.00" / '10.00' - ponto flutuante
var number2 = 5.2 // inteiro

// Afim de converter o seu tipo para string eu uso

// number.toString()

number = parseInt(number).toFixed(3) // Quando utilizo a função assim é quando você
//não tem nada anteriormente

alert(number)

//Então, quando utilizo o meu parseInt, ele vai ignorar tudo o que tenho
//após o ponto, inclusive o próprio ponto.

number2 = parseFloat(number2).toPrecision(3)

alert(number2)

//O toPrecision conta com o ponto, enquanto o toFixed conta somente 
//as casas decimais.

// Para ter números gerados arredondados e que nunca passarão de 6 eu utilizo a função

var random = Math.round(Math.random() * 6)
alert(random)

//Tudo que está relacionado a matemática temos acesso na biblioteca Math.