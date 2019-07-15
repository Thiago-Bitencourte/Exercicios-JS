// par nome/valor
const saudacao = 'Opa'

function exec(){
    const saudacao = 'Falaaa'
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const Cliente = {
    nome: 'Thiago',
    idade: 24,
    peso: 50,
    endereco: {
        logradouro: 'Rua da Depressão',
        numero: 40
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)