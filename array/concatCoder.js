const filhas = ['Ualeskah', 'Cibalena'];
const filhos = ['Uoxiton', 'Uesclei'];

const todos = filhas.concat(filhos, 'Fulano')
console.log(todos, filhas, filhos)
//[ 'Ualeskah', 'Cibalena', 'Uoxiton', 'Uesclei', 'Fulano' ] [ 'Ualeskah', 'Cibalena' ] [ 'Uoxiton', 'Uesclei' ]

//com array
//Uma matriz um array dentro de outro array
console.log([].concat([1,2], [3, 4], 5, [[6, 7]])) //[ 1, 2, 3, 4, 5, [ 6, 7 ] ]

console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]]));  //[ 'a', 'b', 1, 2, 3, 4, 5, [ 6, 7 ] ]

