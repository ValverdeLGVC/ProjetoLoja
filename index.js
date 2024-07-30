//alert('teste');//faz aparecer mensagem de alerta na tela.



var name = 'Luiz';//Assim que se declara uma variavel em java script.



var eu = {
    nome: 'Luiz',
    amor: 'Fani',
    brinquedo: 'videogame'
} //para declarar varias informações em uma só variavel.
console.log(eu)


//função:

function nomedaFuncao() {
  //aqui dentro escrevemos o que ela faz
  console.log('aprovar') //envia para o console a alavra aprovar, mas para enviar tem que chamar função
}
nomedaFuncao() //chamei a função



//de forma semelhante voce pode fazer uma função e mostrar o status que é o que você ira colocar dentro do parenteses da seguinte forma 

function testePapiro(status) {
    console.log('transação ' + status)
}
testePapiro('Aprovada')





//soma em js:

let num1 = 3
let num2 = 5

let total = num1 + num2

console.log(total); //somando em js
//obs, esses comandos fazem apareser somente no console, não aparecera nada na página






//comparação:

let num = 3
console.log(num > 9)//no console ira aparecer se é verdadeiro, ou falço essa informação








//if else operador ternario:
let driver = 90
let speed = driver > 110 ? 'Acima da velocidade':'velocidade ideal' // esta escrito, se a velocidade receber o driver  acima de 110 diga 'Acima da velocidade' se nao diga 'velocidade ideal'
console.log(speed) 











//Agora anotarei exemplos de comandos que usam opeadores lógicos:

//&&=e
//||=ou
//!=não

var temIdadeMinima = true;
var temTitulodeEleitor = true;
var podevotar = temIdadeMinima && temTitulodeEleitor;

console.log(podevotar);

//exemplo de como funciona o not:

var podeViajar = !podevotar;//oposto de pode votar, esse é o not!

console.log('Pode viajar: ' + podeViajar);









//exemplos de como aplicar if / else:

var velocidadedoCarro = 110;

if(velocidadedoCarro > 110){
  console.log('muito rapido, reduza');
}

else if(velocidadedoCarro > 40 && velocidadedoCarro <= 110){
  console.log('ok');
}

else
  console.log('muito devagar, cuidado');












//exemplo de switch e case:()
var videogame = 'ps5'
    
switch(videogame){
  case 'ps4':
    console.log('playstation 4');
    break
  case 'ps5':
    console.log('playstation 5');
    break
  case 'xbox':
    console.log('xbox one');
    break//se eu não colocar break nos lugares certos, ia aparecer tudo dentro da chave, nós não queremos isso.    
}

//primeira tentativa para fazer o javascript funcionar na página:

function testePagina() {
//testePagina() é o nome da função
console.log('ok')
}
//tentativa logrou exito!







//tentativa para fazer funcionar na página web:
function update() {
   let bill = Number(document.getElementById('yourBill').value) //O .value serve para mostrar o valor

   //agora vamos tentar trabalhar com o label(tentativa da label falhou)

   let teste = Number(document.getElementById('yourBillL').value)//no video o cara pegou o for do html nessa parte da label(essa tentativa com a label falhou)
   //Eu troquei por span no html, e enviou NaN pro console
   let bill2 = Number(document.getElementById('yourBill2').value)


   //comessaremos aqui o calculo matemático
   let calculo = bill * bill2
   //vamos fazer agora o resultado aparecer no span finalmente
   document.getElementById('yourBillL').innerHTML = calculo  //joguei a varriavel do resultado do calculo, mas não esqueça do .innerHTML porque esse é o comando para poder inserir o valor no span 
   //obs:'yourBillL' = id do span
   
}
//não esquece de colocar o oninput="update()" la no html
//agora para converte-lo para número e só colocar o comando Number atras do document, e a frente de Number colocar parenteses, terei que deixar dessa forma, mas idealize sem ele para outras ocasiões
//logrou exito, exeto a label
//funcionou




//teste pessoal:

function meuTeste() {
  let cpf = document.getElementById('CPF').value
  document.getElementById('nome').innerHTML = cpf
}
//funcionou somente com o oninput, não funcionou com o click do botão não!












