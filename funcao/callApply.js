function getPreco(imposto = 0, moeda = 'R$') {
    return `${moda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4598,
    desc: 0.15,
    getPreco
}

console.log(getPreco())