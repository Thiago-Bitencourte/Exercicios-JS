function Carro(velocidade = 200, delta = 5) {
    // Atributo privado
    let velocidadeAtual = 0

    // Metodo Privado
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    // Metodo Publico
    this.getVelocidadAtual = function () {
        return velocidadeAtual
    }

}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadAtual())