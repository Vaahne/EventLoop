// alert("hi");

var counter = 0;

function recursive(){
    counter ++;
    console.log(counter);  
    // 10349
    // Maximum call stack size exceeded
    recursive();
}

try{
    recursive();

}catch(e){
    console.error(e.message," counter Value: ",counter);
}