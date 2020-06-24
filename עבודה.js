function num(a,b,c){
  let i = a+b+c,
  if 
  ( num > 0){
   return  ( 'תוצאה חיובית')
    
  }
}
num(2,4,5)
console.log(sum)
let invrtore={
  david : 80,
  moshe : 75,
  avi : 95,
  chaim: 65,
}
let sum=0
let i = Object.values(invrtore);
for (let j of i){
  sum += j
}
 console.log(sum/4)

 let x ,y;
 for (let i =0; i<=100;i++){
   x = i % 10 ; 
   y =((i-x) / 10);
   if((x+y)% 4==0)
   console.log(i)
 }
let sum1=0
for (i = 0;i<1000;i++)
 if (i % 3  ==0 && i % 5 ==0){
    sum1 += i
    console.log(i)
 }
console.log(sum1)

שאלה  9

let person = {
  "firstName": "assaf",
  "lastName" :"sahar",
  "age" : 50
};
person['add'] = "chaim"
person.cou = "israel"

console.log(person)

let pus=[]
let array =[["apple"],["banana"],["orange",5,8],[3]];
for(let j=0;j<array.length;j++){
 pus= array.push()
  console.log(pus)
}
array.splice(2,1)
console.log(array)


let grades = {
  "david" : 75,
  "shlomo" : 100,
  "bnny" : 70,
  "chaim🏌️‍♂️":56
}
let grades2 = {
  "bar⚽" : 75,
  "or🎈" : 100,
  "bibi👨‍🎤" : 70,
  }

function calk(d){
let sum =0;
let j =0;

for ( i in d){
  j++;
  sum += d [i];
  console.log()
  console.log(sum+i+j)
}

let aaaa = sum / j;
console.log("😀🎅 "+aaaa)
}

calk(grades)
calk(grades2)

for(let i = 1;i <=50; i++){
let nstr = " " + i;
let sum =0;

for(let j in nstr){
  sum += parseInt(nstr[j]);
}
  if(sum % 4==0){
  console.log(i)
}}

// תשובה 6
function mmm(arr,num){
  let res = [];
  for(let i of arr){
    res.unshift(i);
    if( i == num ){
      break;
    }
  }
  return res;
}  
console.log(mmm([32,4,55,77],55));

function names(x){
let str = x.join("-");
console.log(str);
}
names(["chaim","bar","or🎈"])

let persons = {
  firstName:"chaim🏌️‍♂️",
  lastName:"bar",
  xposition: 0,
  yposition: 0,
}
let Gamecaracter = function(firstName,lostName,x, y ,move){
  this.firstName = firstName,
  this.lostName = lostName ,
  this.xposition = x,
  this.yposition = y,
  this.move = move;
}

  let move = function(xAmoo,yAmoo){
    this.xposition += xAmoo;
    this.yposition += yAmoo;
  }


let newcara1 = new Gamecaracter("assaf", "bar",3,6,move);

newcara1.move(80,5)

console.log(newcara1)



// let fruit =[ "apple", "banana","orange","kiwi"]

// fruit.splice(1,2)
// console.log(fruit)
// //לוח הכפל

// for(let i = 1; i<=10;i++){
//   var str = " ";
//   for(let j=1 ; j<=10;j++){
//     str += j*i + "-";
//   } 
//   console.log(str);
// }

// function vectori(x){
//   let num = 1;
//   for (let i=1;i<=x;i++){
//     num = num*i;
//   }
//   return(num)

// }
// vectori()
// console.log(vectori(6));

// function revrss(str){
//   let result = " ";
//   for(let i=str.length-1;i>=0;i--){
//     result += str[i];
//   }
// return result;
// }
// console.log(revrss("abcdef"));

// let person = {
//   firstName : "chaim",
//   lastName: "baror",
// }
// for (let i in person){
//   console.log(i)
// }
// סיסמה
function goodPass(password){
  let isNumber = false ,
  isLow = false ,
  isBig = false;
  if (password.length < 10)
   {return false};
  for (i of password){
    switch (true) {
      case (isNaN(i) && i == i.toUpperCase()) : isBig = true;
      break;
      case (isNaN(i) && i == i.toLowerCase()) : isLow = true;
      break;
      case (!isNaN(i)) : isNumber = true;
      break;
    };
  }
  return isNumber && isLow && isBig;
 }
 console.log(goodPass("2JkNbgfdy6"));
 
 function inpor(arr,i){
   return arr[i] != undefined?Math.pow(arr[i],2):-1;
 
 }console.log(inpor[1,35,7],1)
 // מחרוזת בתוך מחרוזת
 function string(str1,str2){
   return str1.indexOf(str2);
 }
 console.log(string("shalom", "lo"));
 