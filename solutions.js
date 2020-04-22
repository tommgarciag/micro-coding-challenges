const challenge1 = function(){
    console.log("Challenge #1");
  
    for (let i=1; i<=10;i++) {
      console.log(i);
    }
  }
  
  
const challenge2 = function(){
    console.log("Challenge #2");
    for(let i=1; i<=100;i++){
        if(i%2!==0){
        console.log(i)
    }
}
}

  
  
const challenge3 = function(){
    console.log("Challenge #3");
    for(let i = 0; i<=10;i++){
        let row = `7 x ${i} = ${7*i}`
        console.log(row);
    }
    }
  
  
  
  
const challenge4 = function(){
    console.log("Challenge #4");
    for (let i=1;i<=10;i++){
      console.log(`Tabla del ${i}`);
      tablaMultiplicar(i);
    }
  } 
  
function tablaMultiplicar(number1) {    
    for(let i=1;i<=10;i++){
      let row = `${number1} x ${i} = ${number1*i}`;    
      console.log(row);
    }
  }
  

const challenge5 = function(array){  
    console.log("Challenge #5");
    let sumaTotal=0;
    let stringTotal="0";
    for (let i = 1; i<=array.length;i++){
      
      sumaTotal = sumaTotal + i;
      stringTotal += ` + ${i}`;
    }
    console.log(`${stringTotal} = ${sumaTotal}`);
}
  
const challenge6 = function(array){  
    console.log("Challenge #6");
    let sumaTotal = 1;
    let stringTotal="1";
    for (let i = 2; i<=array.length;i++){
        
        sumaTotal = sumaTotal * i;
        stringTotal += ` x ${i}`;
    }
    console.log(`${stringTotal} = ${sumaTotal}`);
}


//const array1al10 = [1,2,3,4,5,6,7,8,9,10];
//challenge5(array1al10);
//challenge6(array1al10);
  

const challenge7 = function(){
    console.log("Challenge #7");
    let sumaImpares = 11;
    let stringNumeros = "11";
    for(let i=13;i<=30;i=i+2){
        sumaImpares += i;
        stringNumeros += ` + ${i}`;
                
    }
    console.log(`${stringNumeros} = ${sumaImpares}`)
}

//challenge7();

const fromCelsiusToFahrenheit = function(n) {
    console.log("Challenge #8");
    let faherenheit = n *1.8 + 32;
    console.log(`${n} °C = ${faherenheit} °F`);
}

//fromCelsiusToFahrenheit(20);

const fromFahrenheittoCelsius = function(n) {
    console.log("Challenge #9");
    let celsuis = (n-32) / 1.8;
    console.log(`${n} °F = ${celsuis} °C`);
}

//fromFahrenheittoCelsius(68);

const challenge10 = function(array){
    console.log("Challenge #10");    
    let sumaTotal=0;    
    for (let i=0;i<array.length;i++){
        sumaTotal += array[i];        
    }
    return console.log(sumaTotal);
}

const arrayNumeros = [2,5,84,-3,1,-42,15.5];
challenge10(arrayNumeros);

const challenge11 = function(array){  
    console.log("Challenge #11")  
    let sumaTotal=0;    
    for(let i=0;i<array.length;i++){
        sumaTotal += array[i];

    }
    let promedio = sumaTotal / array.length;
    return console.log(promedio);
}
const arrayNumeros2 = [1, 3, 9, 15, 90];
challenge11(arrayNumeros2);

const challenge12 = function(array){
    console.log("Challenge #12");
    let numerosPostivos=[];
    for(let i=0;i<array.length;i++){
        
        if (array[i]>=0){
            numerosPostivos.push(array[i]);
        }      
    }
    return console.log(numerosPostivos);
}

challenge12(arrayNumeros);

const challenge13 = function(array){
    console.log("Challenge #13");
    let mayor =0;
    for(let i =0;i<array.length;i++){
        if(array[i]>mayor){
            mayor = array[i];
        }       
    }
    return console.log(mayor);
}

challenge13(arrayNumeros);

const challenge14 = function(){
    console.log("Challenge #14")
    let f0 = 0;
    console.log(f0);
    let f1 = 1;
    console.log(f1);
    for (let i=0;i<20;i++){
        let fibonacci = f1 + f0;
        console.log(fibonacci);
        f0 = f1;
        f1 = fibonacci;
    }
}

challenge14();

