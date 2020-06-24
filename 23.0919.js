class GameCharacter{
  constructor(name,xposition,yposition,s){
  this.name = name;
  this.xposition = xposition;
  this.yposition= yposition
  this.show = s;
}
move(xAmont,yAmont){
this.xposition += xAmont;
this.yposition += yAmont;
}
}
let pley1 = new GameCharacter ("chaim", 3,0,show);
let pley2 = new GameCharacter("david",10,10,number);
let pley3 = new GameCharacter("a",0,0,haha);
pley1.name += " baror"
pley1.move(8,8) 
pley1.show( 1000);
pley2.show()
console.log(pley1);
console.log(pley2);
console.log(pley3);
console.log("this is my power "+ pley1.xposition);
function show(num){
  this.show  =num;
  console.log("this  is my show " +this.xposition);
}
function number(){
  console.log("this  is my number " +this.xposition);
}
function haha(){
  console.log("this  is my" +this.xposition);
}