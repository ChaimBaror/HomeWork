class  GameCharacter {
  constructor(name, x,y,z,){
  this.name = name;
  this.xposition = x;
  this.yposition = y;
  this.show = z ;
  
}
showName(){
  console.log("my name is " + this.name);
}
 move (xAmount,yAmount){
  this.xposition -= xAmount;
  this.yposition += yAmount;
}
}
let newCharater1 = new GameCharacter ("assaf",5,6,show,);

let newCharater2 = new GameCharacter ("chaim",4,5,number);
newCharater2.name += " baror" 
newCharater1.move(3,4)

// console.log(newCharater1)
// console.log(newCharater2)
newCharater2.showName();

function show(){
  console.log("my fower is " + this.xposition);
}
function number(){
  console.log("my number is " + this.yposition + this.xposition);
}
newCharater2.show()
newCharater1.show()



