class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes,
        this.ano = ano,
        this.lacamentos = []
    }

    addLancamentos(...lacamentos) {
        lacamentos.forEach(l => this.lacamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lacamentos.forEach(l => {
            valorConsolidado += l.valor
        })

        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 260000)
const contaLuz = new Lancamento('Luz', -220)
const contaInternet = new Lancamento("Internet", -100);
const ipva = new Lancamento('IPVA', -200)

const contas = new CicloFinanceiro(1, 2019) 
const contas2 = new CicloFinanceiro(3, 2023); 
contas.addLancamentos(salario, contaLuz, contaInternet)
contas2.addLancamentos(ipva)

// console.log(salario, contaLuz, contaInternet)
console.log(contas, contas2)

//Agora o valor
console.log(contas.sumario(), contas2.sumario())