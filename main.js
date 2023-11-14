
 function Finalpla(){
const texto = document.querySelector("h2");
const textoo = document.querySelector("p");
const placarro = document.querySelector('#n1').value;
const diasemana = document.querySelector('#n2').value;
const tipo = document.querySelector('#n3').value;

  
if(tipo == "Outros tipos de automóveis"){

    //placas final 1 e 2

    if(placarro == 1 || placarro == 2 && diasemana =="segunda" ||diasemana =="Segunda" || diasemana == "segunda-feira" || diasemana =="Segunda-feira"){
       texto.innerHTML = "Você não pode circular";
       textoo.innerHTML = "Verifique outros dias da semana"
    }

    else if(placarro == 3 || placarro == 4 && diasemana =="terca" ||diasemana =="Terça" || diasemana == "Terça-feira" ||diasemana =="terça" || diasemana =="terça-feira"){
        texto.innerHTML = "Você não pode circular";
        textoo.innerHTML = "Verifique outros dias da semana"
     }

    //placa final 5 e 6
    else if (placarro ==5 || placarro ==6 && diasemana ==" Quarta-feira"|| diasemana =="quarta-feira" || diasemana =="quarta"|| diasemana =="Quarta" ){
      texto.innerHTML= "Infelizmente você não pode circular";
      textoo.innerHTML="Verifique outro dia da semana";
   }

//finais de placas 7 e 8
 
 else if (placarro ==7 || placarro ==8 && diasemana ==" Quinta-feira"|| diasemana =="quinta-feira" || diasemana =="quinta"|| diasemana =="Quinta" ){
    texto.innerHTML= "Infelizmente você não pode circular";
    textoo.innerHTML="Verifique outro dia da semana";
 }
 //finais de placa 9 e 0 
 else if (placarro == 9 || placarro == 0 && diasemana =="Sexta-feira"|| diasemana =="sexta-feira" ||diasemana =="sexta"|| diasemana =="Sexta" ){
    texto.innerHTML= "Infelizmente você não pode circular";
    textoo.innerHTML="Verifique outro dia da semana";
 }

 else{
   texto.innerHTML= "Você pode circular";
 textoo.innerHTML=" Circulação de automóveis liberada apenas das 7h às 10h e das 17h às 20h";
}

}
 else if(tipo == "Caminhão"){
   texto.innerHTML= "Você pode circular";
   textoo.innerHTML="Não há Rodízio para seu tipo de automóvel";
 }
 else{
   textoo.innerHTML="Erro!!! a informação inserida não pode ser avaliada ";

 }

 }

