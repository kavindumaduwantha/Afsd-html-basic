console.log("run");

function clickme() {
    const number_1 = document.getElementById("number-1").value
    const number_2 = document.getElementById("number-2").value
    console.log(number_1+ "__"+number_2);

    //if(number_1 == number_2){
    //    console.log("success..."); }
    //else{console.log("fail...")}
    
}

function greaterThan() {
    const number_3 = parseInt(document.getElementById("number-3").value)
    const number_4 = parseInt(document.getElementById("number-4").value)

    if(number_3 < number_4){
           console.log("number-4"); 
        }
        else{
            console.log("number-3")
        }
  //parseInt dala tiyenne string ek int ekkata convert kt gnn

}

function addition () {
    const number = document.getElementById("addition-number").value;
    let sum = 0;
    for(let i=0; i<number.length; i++){
       sum += parseInt(number[i])
    }
    console.log(sum);
}

function addition1 () {
    const string = document.getElementById("addition-string").value;
 for(let i=0; i<string.length; i++){
    console.log(string[i]);
    }
    
}



//////////


const namearray = [];
function pusharray () {
    const userinput = document.getElementById("input-array").value
    namearray.push(userinput)
    document.getElementById("input-array").value = "";
}

function printarray () {
    console.log(namearray);
    }
    



////load random numbers
var randomArr = [];
for (var i=0; i<50; i++){
    randomArr.push(Math.round(Math.random() * 100))
}
document.getElementById('random-array-desplay').innerHTML = randomArr;

function search(){
    const num= parseInt(document.getElementById("random-input").value);

    let result = [];
    for (var i=0; i<randomArr.length; i++){
        if(randomArr[i] % num == 0){
            result.push(randomArr[i])
        }
    }

    document.getElementById('result').innerHTML = result;
}

 







