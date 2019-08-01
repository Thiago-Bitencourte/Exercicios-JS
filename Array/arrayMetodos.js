const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o último elemento do Array

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // Remove a primeira posição do Array
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um elemnto da primeira posição do Array
console.log(pilotos)

// Splicepode adicionar e remover elementos

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover 
pilotos.slice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Novo Array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)