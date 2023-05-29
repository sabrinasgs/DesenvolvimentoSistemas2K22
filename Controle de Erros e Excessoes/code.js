 const inputFileButton = document.getElementById("inputfilebutton");
inputFileButton.addEventListener("click", clickFileButton);

const inputNumberButton = document.getElementById("inputnumberbutton");
inputNumberButton.addEventListener("click", clickNumberButton);
// addEventListener - Ouvidor de evento, meio que percebe que o botão foi clicado e faz alguma coisa

function clickFileButton(){}
function clickNumberButton (){

  alert("Informe um valor entre 5 a 10") //Eu não sabia como colocar uma mensagem falando isso, a solução que encontrei foi essa

  number = document.getElementById("inputnumber").value
  try {
    if (number == '') throw 'Informe um valor';
  }
  catch(erro) {
    console.log(erro);
    document.getElementById("outputnumber").ineerHTML = erro;
  }


 try {
  if (number < 5 || number > 10) throw 'Informe um valor maior que 5 e menor que 10'
 } 
 catch(erro) {
  document.getElementById("outputnumber").ineerHTML = erro;
  alert("Erro + erro javascript");
 }
 finally {
   alert("O número escolhido foi: " + number )
 }
}























// Coluna 1 - DomJavascript

//     arquivo = document.getElementById("inputfile");

//     var fr=new FileReader();
   
//     try {
//     fr.readAsText(arquivo.files[0]); //Essa função é capaz de detectar todas as informações do arquivo
//     fr.onload=function(){
//       info = fr.result;
//       console.log(info);
//       document.getElementById('output').textContent=fr.result;
//     }
//     if (info == ""){
//       throw 'Não foi possivel ler o arquivo selecionado.'; //Lança uma excessão para o Try
//       }
// }
//     catch(erro) {
//     console.log(erro);
//     alert(erro);
// }
//     finally { //Sempre vai acontecer, independente do Try ou do Catch ser realizado
//     alert("Obrigado pela visita!");
// }      
// }



