let valor, valor2;

valor = parseInt(prompt("Digite um valor: "));
valor2 =parseInt(prompt("Digite outro valor: "));

if (valor < valor2){
    window.alert(`A ordem crescente é ${valor}, ${valor2}`)
}else{
    window.alert(`A ordem crescente é ${valor2}, ${valor}`)
}