let eleitores, votosBrancos, votosNulos, votosValidos;
let percentualBrancos, percentualNulos, percentualValidos;

eleitores = parseInt(prompt("Quantos eleitores tem no seu município? "));
votosBrancos = parseInt(prompt("Quantos votos brancos? "));
votosNulos = parseInt(prompt("Quantos votos nulos? "));
votosValidos = parseInt(prompt("Quantos votos válidos? "));

percentualBrancos = eleitores * (votosBrancos / 100);
percentualNulos = eleitores * (votosNulos / 100);
percentualValidos = eleitores * (votosValidos / 100);

window.alert("Os eleitores são: " + eleitores + "%")
window.alert("Os votos brancos: " + percentualBrancos + "%")
window.alert("Os votos nulos: " + percentualNulos + "%")
window.alert("Os votos Válidos: " + percentualValidos + "%")