/*
Felipe Santos das Neves tem 26 anos , pesa 84 kg
tem 1,70 de altura e seu imc é de 25.92925925925924
*/

const nome = 'Felipe Santos';
const sobrenome = ' das Neves';
const nomeCompleto = nome + sobrenome;
const  idade = 27;
const peso = 84;
const altura = 1.70;
const ano = 2021;
let imc;// peso / (altura * altura)
let anoNascimento;

imc = peso / (altura *altura);
anoNascimento = ano - idade;

console.log("Nome Completo : ", nomeCompleto);
console.log( "Idade : ", idade);
console.log( "Ano de Nascimento", anoNascimento);
console.log("Peso : ", peso);
console.log("Altura",  altura);
console.log("IMC de : ", imc);

