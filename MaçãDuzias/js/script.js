let quantidadeMaca, calculo;

quantidadeMaca = parseFloat(prompt("Quantas maçãs você vai comprar? "));

// Cada maçã é 1,30 se for menos que um duzia.
// Se for uma duzia ou mais custa 1,00.

if (quantidadeMaca < 12){
    calculo = quantidadeMaca * 1.30;
}else{
    calculo = quantidadeMaca * 1.00;
}

window.alert(`A quantidade de maçãs é ${quantidadeMaca} e o valor deu R$ ${calculo}.`)