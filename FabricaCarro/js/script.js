let custoFabrica, novoCarro, imposto, porcentagem, distribuidor;

const percentual_distribuidor = 28 / 100;
const percentual_impostos = 45 / 100;

custoFabrica = parseFloat(prompt("Qual é o custo de fábrica? "));

distribuidor = custoFabrica * percentual_distribuidor;
imposto = custoFabrica * percentual_impostos;

novoCarro = custoFabrica + imposto + distribuidor;

window.alert(`Custo de fábrica: R$ ${custoFabrica.toFixed(2)}`);
window.alert(`Margem do Distribuidor (28%): R$ ${distribuidor.toFixed(2)}`);
window.alert(`Impostos (45%): R$ ${imposto.toFixed(2)}`);
window.alert(`Custo final: R$ ${novoCarro.toFixed(2)}`);