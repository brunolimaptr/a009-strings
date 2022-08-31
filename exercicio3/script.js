const frase = (`Jorge tem uma casa verde e com portão azul, com os dizeres: 
"BOAS VINDAS, mas não deixe o gato sair"`)
const frase2 = frase.replace("verde", "rosa")
const frase3 = frase2.replace("azul", "laranja")
const frase4 = frase3.replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR")

console.log(frase)
console.log(frase3)
console.log(frase3.includes("verde"))
console.log(frase3.includes("laranja"))
console.log(frase4)