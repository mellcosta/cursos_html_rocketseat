/*
            * Sistema de Gastos Familiar *

        Criar um objecto que possuirá 2 propriedades, ambas do tipo array:
            *icomes ou receitas: []
            *expenses ou despesas: []

        A seguir, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com o saldo positivo ou negativo, seguido do valor do saldo

 */

        //My Way
let gastos = {

    receitas: [160, 100, 80],

    despesas:[90, 10, 30]

}

function saldo(){

    let saldoReceitas = gastos.receitas[0]+gastos.receitas[1]+gastos.receitas[2]
         console.log(`Receitas= ${saldoReceitas}`)

    let saldoDespesas = gastos.despesas[0]+gastos.despesas[1]+gastos.despesas[2]
        console.log(`Despesas= ${saldoDespesas}`)

    let saldoTotal = saldoReceitas - saldoDespesas
        console.log(`O saldo total é de ${saldoTotal}`)

    if(saldoTotal >= 20){
        console.log(`Saldo positivo: ${saldoTotal} kz`)
    }else{
        console.log(`Saldo negativo: ${saldoTotal} kz`)
    }
}
saldo()



    //Model

let family = {
    icomes: [160, 100, 80],
    expenses:[90, 10, 30]
}

function sum(array){
    let total = 0;

    for(let value of array){
        total += value
    }
    return total  
}
function calculateBalance(){
    const calculateIncomes = sum(family.icomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = 'negativo'
    
    if (itsOk) {
        balanceText = 'positivo'
    }

    console.log(`Seu saldo é ${balanceText}: ${total}R$`)

}
calculateBalance()