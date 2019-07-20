//Função em JS é Fist-Class Object (Citizens)
// Higher-order function

// Criar de forma literal
function func1() {
}

// Armazenar em um variavel
const func2 = function() {
}

// Armazenar em um Array
const Array = [function (a, b) { return a + b}, func1, func2]
console.log(Array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// Passar função como param
function run(fun) {
    fun()
}

run(function () {console.log('Executado...')})

// Um função pode retornar/conter um função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)