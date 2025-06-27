
lista = ['brigadeiro', 'cocada', 'quindim']
// cada virgula significa um item na lista
// 1D - array normal

notasDoces = [10, 7.5, 5]
// supondo que eu mude cocada para o lugar de brigadeiro
// tem que trocar também as notas de posição

brigadeiro = ['brigadeiro', 10]

doces = [['brigadeiro', 10], ['cocada', 7.5], ['quindim', 5]]

// quero só printar um item
// Pegar o nome do terceiro doce
console.log (doces [2][0])
// o [2] se refere ao lugar onde a cocada está na 1ª lista
// o [0], se refere ao lugar onde o 'nome' está, que é a posição 0   

// console.table (doces)

// automaticamente ele lê e coloca no final
// é um novo item por colchete
doces.push (['paçoca', 8])

console.table (doces)

qualDoce = doces.pop()
// .pop () sempre tira o último elemento colocado

console.table (doces)

