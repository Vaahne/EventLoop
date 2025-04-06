// alert("hi");
//  ***********PART 1*******************
const primeDiv = document.querySelector(".primeDiv");
var counter = 0;
function recursive(){
    counter ++;
    recursive();
}
try{
    recursive();

}catch(e){
    console.log(counter);
    console.log(e)
}

// ************************ PART 2 ************************
//  Flatten an array using recursion

function flatArr(arr){
    let flat = [];
    arr.forEach(element => {
       if(Array.isArray(element)){
            flat = flat.concat(flatArr(element));
       }else{
            flat.push(element);
       }
    });
    return flat;
}

let array = [2,3,[24,4,42,[32,[42]],343,[34,34],43,[3],53],35,[34]];

try{
    let flatten = flatArr(array);
    console.log(flatten);
}catch(e){
    console.error(e.message);
}


//  ************** PART3 **************************


function isPrime(n){
    for(let j= 2;j<n;j++){
        if(n%j == 0)
            return false;
    }
    return true;
}
let startsAt = 2;
const number = 10000;
let primeNums = [];

function renderPrime(){
    
     if(startsAt > number){
        alert("All prime numbers found");
        return;
    }
    if(isPrime(startsAt)){
        primeDiv.textContent += startsAt + " ,";
        primeNums.push(startsAt);
    }
    startsAt ++;
    setTimeout(renderPrime,0);
}

try{
renderPrime()
console.log(primeNums);
}catch(e){
    console.error(e.message);
}