let comprimentoPista, totalVoltas, reabastecimentoDesejado, consumoCombustivel, kiloMetro, voltas, distanciaPercorrida, litrosNecessarios, primeiroLitrosNecessarios;

comprimentoPista = parseFloat(prompt("Qual o comprimento da pista em metros? "));
totalVoltas = parseFloat(prompt("Quantas voltas são? "));
reabastecimentoDesejado = parseFloat(prompt("Quanto reabastecimentos deseja? "));
consumoCombustivel = parseFloat(prompt("Qual foi o consumo de combustivél? "));

kiloMetro = comprimentoPista / 1000; // Convertendo Metros para Km
distanciaPercorrida = kiloMetro * totalVoltas; // A distancias total da corrida
litrosNecessarios = distanciaPercorrida / consumoCombustivel; // A quantidade de litros = distancia total / pelo consumo km/l
primeiroLitrosNecessarios = litrosNecessarios / (reabastecimentoDesejado + 1); // PrimeiraVolta ele para 1 vez, mais 1 pois se cortar no meio a distancia dividira por 2.

window.alert(`Os litros necessários para percorrer ${totalVoltas} volta(s) é: ${primeiroLitrosNecessarios}`)