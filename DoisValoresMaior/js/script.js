let valor, valor2;

valor = parseInt(prompt("Digite um valor: "));
valor2 = parseInt(prompt("Digite outro valor: "));

if (valor > valor2){
    window.alert(`O maior valor é ${valor} e o menor é ${valor2}.`)
}else{
    window.alert(`O maior valor é ${valor2} e ${valor} é menor.`)
}