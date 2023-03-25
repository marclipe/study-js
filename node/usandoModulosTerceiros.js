const _ = require('lodash')
//executar um valor entre 1 e 1000 de doie em dois segundos
setInterval(() => console.log(_.random(1, 10)), 2000)