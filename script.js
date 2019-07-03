
//Assim São feitos comentarios de uma linha
/*/
assim são comentarios de varias linhas/*/

/*/Javascript 
é uma linguagem clientside, do lado do cliente.
funciona dentro de uma pagina HTML
a declaracao é feita dentro do HEAD/*/

var mensagem = "Hello World";

alert(mensagem);

var a = 2;
var b = 3;
var c = "olá";

var soma = a+b;
var sub = a-b;
var mult = a*b;
var div = a/b;

alert(soma);
alert(sub);
alert(mult);
alert(div);
alert(3%2);

// estrutura condicional para verificar se um numero é par ou impar

if (a%2 == 1){
    alert("Número impar");
}
else if (a%2 == 0 ){
    alert("Número par");
}
else {
    alert("Valor inválido");
}

//estrutura de laço

var i = 0;

while (i<3){
    alert(i);
    i=i+1;
}

var j;
for (j = 0; j<3; j++){
    alert(j);
}

//tipos de dados:

var numero = 6; //numero inteiro
var decimal = 4.5; //numero flutuante
var string = "ola"; //string
var lista = ["laranja", "maçã", "banana", "1234"]; //lista, array

alert(lista);
alert(lista[0]);

for(i in lista){
    alert(lista[i]);
}

//outra maneira de mandar mensagem para o usuario, é usar o command.log, que exibe uma mensagem no console do navegador

console.log("olá mundo")