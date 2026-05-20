let potencia, largura, comprimento, area, wattsM, quantidade, arred;

potencia = parseFloat(prompt("Digite a potência da lâmpada: "));
largura = parseFloat(prompt("Digite a largura do cômodo: "));
comprimento = parseFloat(prompt("Digite o comprimento do cômodo: "));


area = comprimento * largura;
wattsM = 18 * area;
quantidade = wattsM / potencia;
arred = quantidade + 0.5;

alert("Essa é a quantidade necessária para o cômodo é: " + arred)