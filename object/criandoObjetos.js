//usando a notação literal
const obj1 = {}
console.log(obj1)

//Object em JS
//Um objeto criado a partir de uma função construtora
console.log(typeof Object, typeof new Object)
//segunda forma
const obj2 = new Object
console.log(obj2)

//Função construtora 
//é igual a segunda forma só que é uma função sua
function Produto(nome, preco, desc) {
    //tornei essa variável pública, não está encapsulada, this = público
    //Quando penso em encapsulamento penso em diminuir o nível de determinada variável
    this.nome = nome
    this.getPrecoComDesconto = () => {
        //preco e desconto não estão disponíveis para fora do objeto, estão encapsulados  
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())


//Função Factory - Um padrão de projeto
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Marcos', 7000, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario())
console.log(f2.getSalario())

//Uma função - Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma função famosa que retorna um Objeto...
//JSON
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON)