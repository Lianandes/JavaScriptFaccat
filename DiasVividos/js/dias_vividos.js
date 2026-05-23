alert("Dias vividos")

let ano, mes, dia, resultado;

ano = parseInt(prompt("Digite quantos anos completos você tem: "));
mes = parseInt(prompt("Digite quantos meses completos você tem: "));
dia = parseInt(prompt("Digite quantos dias completos você tem: "));

resultado = ano * 365 + mes * 30 + dia;

alert("Você viveu " + resultado + "dias")