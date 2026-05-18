let nota, nota2, nota3, media;

nota = parseFloat(prompt("Qual foi sua primeira nota? "));
nota2 = parseFloat(prompt("Qual foi a sua segunda nota? "));
nota3 = parseFloat(prompt("Qual foi a terceira nota? "));

media = (nota * 2 + nota2 * 3 + nota3 * 5) / 2 + 3 + 5;

window.alert(`Essa foi sua média final : ${media}`)