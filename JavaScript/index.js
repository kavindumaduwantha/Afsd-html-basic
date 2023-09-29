console.log("Run Js External!");


  const age= 18;
  //String
  const name=" AFCD";
  //boolean
  const bool= true;

  const object = {};
  const array = [];

   // let , var , const

   //let
   let a = 12;
   //can not redeclared
   //let a = 13;
   {let b = 90;}
   a = 30;
   console.log(a);
   //console.log(b);

   //var
   var v ="run" ;
   var v ="go" ;
   console.log(v);
   {var k = 12}
   var v="38"
   console.log(k);

   //const
   const o=12;
   //o=30
   //const o = 39;
   {const y = 98}
   //console.log(y);


   // Arithmetic operators

   //addition(+)
   const c= 12;
   const d = 34;
   const addition = c + d;
   console.log(addition);

  //subtraction(-)
  const subtraction = d - c;
  console.log(subtraction);

  //Multiplication(*)
  const multiplication = c * d;
  console.log(multiplication);

  //Division(/)
  const Division = d / c;
  console.log(Division);

  //modulus (%)
  const modulus = d % c;
  console.log(modulus);

  //increment
  let h = 10;
  h++
  console.log(h);

  //decrement
  let j = 10;
  j--
  console.log(j);



  //switch
  const val = "AFCD";
  switch(val){
        case "Kavindu":
          console.log('1');
          break;
        case "AFCD":
          console.log('2');
          break;
          default:
             console.log('error number');
  
  }

 //for loop
 const arr = ['a','b','c','d','e']
 for(let i=0; i<arr.length; i++){
    console.log(arr[i]);

 }

 //while
let p = 0;
while(p< arr.length){
  console.log(arr[p]);
  p++
    
}

//Do while
let i = 0;
do{
  console.log(i);
  i++
}while(i<10);

console.log('=============');
for(let D=0; D<10; D++){
    console.log(D);
    if(D == 5){break;}

}

//Arrays
const fruits = ["banana","orange","apple","mango"];
//const fruit = fruits.pop();
//console.log(fruit);

//fruits.push("kiwi");
//console.log(fruits);

//const fruit = fruits.shift();
//console.log(fruit);

//fruits.unshift("kiwi");
//console.log(fruits);




//object
const person = {
   name: 'kavindu',
   address: 'hambanthota',
   run: function() {console.log("run chamikara"); }
}
const name1 = person.name;
console.log(name1);

person(run);



//Events
//onChange
function onChangeText() {
     const text = document.getElementById('text-input').value
      
     //document.getElementById('name-display').innerHTML = text
     //console.log(text);
}

//onclick
function clickMe() {
  const text = document.getElementById('text-input').value
   
  document.getElementById('name-display').innerHTML = text
}
function onMouseOver(){
    document.getElementById('mouse-div').style.backgroundColor= 'green'
    console.log('mouse over');

}

function onMouseOut(){
  document.getElementById('mouse-div').style.backgroundColor= 'black'
  console.log('mouse out');

}

function keyDown (){
  const text = document.getElementById('text-2').value
  document.getElementById('display-4').innerText = text
}

function keyUp (){
  const text = document.getElementById('text-3').value
  document.getElementById('display-5').innerText = text
}