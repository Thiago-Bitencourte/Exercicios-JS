console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Isabela', 'Raquel','Mariana')
console.log(aprovados)

aprovados = ['Isabela', 'Raquel', 'Mariana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

aprovados[3] = 'Paulo'
aprovados.push('Jonas')
console.log(aprovados.length)

aprovados[9] = 'Patricia'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
console.log(aprovados)
aprovados.sort() // Ordenar o Array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Isabela', 'Raquel', 'Mariana']
aprovados.slice(1, 1,'Suellen', 'Ruth')
console.log(aprovados)