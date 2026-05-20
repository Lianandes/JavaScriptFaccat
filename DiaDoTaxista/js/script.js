let odometroInicio, odometroFinal, kmDia, litrosGastos, valorRecebido, mediaConsumo, lucro, reabastecimento;

const combustivel = 2.90;

odometro = parseFloat(prompt("Qual foi a marcação do odômetro no inicio do dia? "));
marcacao = parseFloat(prompt("Qual foi o do final do dia? "));
litrosGastos = parseFloat(prompt("Quantos litros foram gastos? "));
valorRecebido = parseFloat(prompt("Quanto recebeu no total? "));

kmDia = odometroFinal - odometroInicio;
mediaConsumo = kmDia / litrosGastos;
reabastecimento = litrosGastos * combustivel;
lucro = valorRecebido - reabastecimento;

window.alert(`A média de consumo foi: ${mediaConsumo}Km/L`)
window.alert(`O lucro foi: R$${lucro}`)