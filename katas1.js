//1.oneThroughTwenty - Retornar os números de 1 a 20. (1, 2, 3,…, 19, 20)

function oneThroughFive() {
  let meuRetorno = [];
  for (let counter = 1; counter <= 20; counter++) {
      meuRetorno.push(counter)
  }
  return meuRetorno;
}
console.log(oneThroughFive());

//2.evensToTwenty - Retornar os números pares de 1 a 20. (2, 4, 6,…, 18, 20)

function evensToTwenty() {
  let meuRetorno = [];
  for (let counter = 1; counter <= 20; counter++) {
    if(counter % 2 == 0){   
      meuRetorno.push(counter)
    }
  }
  return meuRetorno;
}
 console.log(evensToTwenty());
 
//3.oddsToTwenty - Retornar os números ímpares de 1 a 20. (1, 3, 5,…, 17, 19)
    
function oddsToTwenty() {
  let meuRetorno = [];
  for (let counter = 1; counter <= 20; counter++) {
    if(counter % 2 == 1){   
      meuRetorno.push(counter)
    }
  }
  return meuRetorno;
}
  console.log(oddsToTwenty());
   
//4.multiplesOfFive - Retornar os múltiplos de 5 até 100. (5, 10, 15,…, 95, 100)

function multiplesOfFive() {
  let meuRetorno = [];
  for (let counter = 1; counter <= 100; counter++) {
    if(counter % 5 == 0){  
      meuRetorno.push(counter)
    }      
  }          
  return meuRetorno;
}
console.log(multiplesOfFive());

//5.squareNumbers - Retornar todos os números até 100 que forem quadrados perfeitos. (1, 4, 9, …, 81, 100)

function squareNumbers() {
  let meuRetorno = [];
  for (let counter = 1; counter <= 10; counter++) { 
    meuRetorno.push(counter * counter )
  }
  return meuRetorno;
}
console.log(squareNumbers());

//6.countingBackwards - Retornar os números contando de trás para frente de 20 até 1. (20, 19, 18, …, 2, 1)
    
function countingBackwards() {
  let meuRetorno = [];
  for (let counter = 20; counter >= 1; counter--) {
    meuRetorno.push(counter)
  }
  return meuRetorno;
}
console.log(countingBackwards());

//7.evenNumbersBackwards - Retornar os números pares de 20 até 1. (20, 18, 16, …, 4, 2)
    
function evenNumbersBackwards() {
  let meuRetorno = [];
  for (let counter = 20; counter >= 2; counter-= 2){
    meuRetorno.push(counter)
  }
  return meuRetorno;
}
console.log(evenNumbersBackwards());

//8.oddNumbersBackwards - Retornar os números ímpares de 20 até 1. (19, 17, 15, …, 3, 1)

function oddNumbersBackwards() {
 let meuRetorno = [];
  for (let counter = 20; counter >= 1; counter--) {
     if(counter % 2 == 1){   
       meuRetorno.push(counter)
     }
  }
  return meuRetorno;
}
console.log(oddNumbersBackwards());    

//9.multiplesOfFiveBackwards - Retornar os múltiplos de 5 contando de trás para frente a partir de 100. (100, 95, 90, …, 10, 5)

function multiplesOfFiveBackwards() {
 let meuRetorno = [];
 for (let counter = 100; counter >= 1; counter--) {
   if(counter % 5 == 0){  
     meuRetorno.push(counter)
   }      
 }          
 return meuRetorno;
}
console.log(multiplesOfFiveBackwards());

//10.squareNumbersBackwards - Retornar os quadrados perfeitos contando de trás para frente a partir de 100. (100, 81, 64, …, 4, 1)
    
function squareNumbersBackwards() {
 let meuRetorno = [];
 for (let counter = 10; counter >= 1; counter--) {     
   meuRetorno.push(counter * counter)
 }
 return meuRetorno;
}
console.log(squareNumbersBackwards()); 