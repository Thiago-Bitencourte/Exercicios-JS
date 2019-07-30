// Pessoa -> {...}
const Pessoa = { nome: 'João'}
Pessoa.nome = 'Pedro'
console.log(Pessoa)

// Pessoa -> 456 -> {...}
//Pessoa = { nome: 'Ana' }

Object.freeze(Pessoa)

Pessoa.nome = 'Maria'
Pessoa.end = 'Rua ABC'
console.log(pessoa.nome)

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)