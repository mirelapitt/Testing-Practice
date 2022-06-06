// Tipagem dinâmica - Numa string eu já tenho disponível algumas funções
// que eu posso utilizar

// var eu = 'Mirela Pitt'
// eu = eu.toUpperCase()

// // Funções nada mais são do que trecho de códigos separados que visam
// // fazer uma alteração em um determinado local


// alert(eu)

// Essa função vai receber o valor de name e eu estou executando uma função
// que vai alterar o meu valor de name
// A função toLowerCase tem o poder de transformar tudo em letras minúsculas
// Uma função disponível somente pelo fato de eu estar utilizando uma string
// Pra acessar uma função, é necessário o uso do ponto .

// Refresh the page = F5
// Comentar - clicar na linha e pressionar Ctrl + ;


// Isso é da própria linguagem, não estamos utilizando nada além da 
// linguagem Javascript

var myname = 'Mirela'
var lastname = 'Pitt'

var fullName = myname + ' ' + lastname

alert(fullName)

// Posso utilizar duas funções dentro de uma única variável

var fullName = myname + ' ' + lastname.replace('t', 'a')

alert(fullName)

// Alt + TAB = atalho de mudança de telas mais rápido
// é mais uma forma de trabalhar com funções específica de uma string
// é obrigatória colocar aspas, pois estamos trabalhando com uma definição de string

var number = 10
alert(number.toString())



