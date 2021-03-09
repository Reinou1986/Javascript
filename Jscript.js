//Twitter popup prompt that displays a message that is 140 or less characters long and cuts off anything over 140 characters:
alert(prompt("Type your message (max characters=140):").slice(0,140));
//Asks for the age of your dog and gives a popup that tells you the age of your dog in human years
var dogAge=prompt("How old is your dog?")
dogAge=(dogAge-2)*4+21;
alert("In human years your dog is "+dogAge+" old!");
//Asks for your age and tells you how many weeks you have lived
function yearsLived (years){
  var daysLived=years*365;
  var weeksLived=Math.floor(daysLived/7);
  console.log("You are "+years+" years old and that is "+weeksLived+" weeks in total!")
}
yearsLived(90);
//Calculates your BMI based on weight and height
function bmiCalculator(weight,height){
  var bmi=weight/Math.pow(height,2);
  return Math.round(bmi);
}
console.log("Your BMI is "+bmiCalculator(65,1.8)+"!");
//pseudo-random diceroll generator
function diceRoll(){
  var roll=Math.random();
  roll=Math.floor(roll*6+1);
  return roll;
}
console.log("You rolled dice and rolled a "+diceRoll()+"!");
//love calculator that generates a random number between 1 and 100 (ignores names given as input completely)
function loveCalc(){
  var match=Math.random()*100+1;
  match=Math.floor(match);
  return match;
}
var love1=prompt ("What is your name?");
var love2=prompt ("What is the name of your crush?");
alert(love1+" and "+love2+" are a "+loveCalc()+"% match!");
//leap year check
var input=prompt("What year do you want to have us check if it is a leap year?");
if(Number.isInteger(input/4)&&Number.isInteger(input/100)&&Number.isInteger(input/400)){
    alert("Looks like that years is (or was) a lear year!")
  }else{
    alert("Not a leap year bozo!")
  }
//guestlist checker
var guestName=prompt("What is your name?");
var guestList=["Dave","Steve","Hank","Daisy","Sheila"];
if (guestList.includes(guestName)){
  alert("Welcome!")
}else{
  alert("Sorry, you are not invited!")
}
/*Fizzbuzz game: multipes of 3 give Fizz!, multiples of 5 give Buzz!,
multiples of both give Fizzbuzz! Fizz/Buzz/Fizzbuzz gets pushed into array otherwise number gets pushed
(important:var number and array are independent)*/
function fizzBuzz(){
  if(number%3===0&&number%5===0){
    output.push("Fizzbuzz!")
  }else if(number%3===0){
    output.push("Fizz!");
  }else if(number%5===0){
    output.push("Buzz!");
  }else{
    output.push(number);
  }
 number++;
 console.log(output);
}
var output=[];
var number=1;
fizzBuzz();
//picks a random person from an array of names that should pay for lunch
function whosPaying(names){
  var paying=names[Math.floor(Math.random()*names.length)];
  return paying+" is going to buy lunch today!"
}
whosPaying(["Angela","Ben","Jenny","Michael","Chloe"]);
//99 bottles of beer song in code
function beer(){
  for(var bottles=99;bottles>=3;bottles--){
    console.log(bottles+" bottles of beer on the wall, "+bottles+" bottles of beer. Take one down, pass it around, "+(bottles-1)+" bottles of beer on the wall...");
  }
  if(bottles<=2){
    console.log(bottles+" bottles of beer on the wall, "+bottles+" bottles of beer. Take one down, pass it around, "+(bottles-1)+" bottle of beer on the wall...");
    bottles--;
    console.log(+bottles+" bottle of beer on the wall, "+bottles+" bottle of beer. Take it down, pass it around, no more bottles of beer on the wall...");
    console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, "+(bottles+98)+" bottles of beer on the wall...");
  }
}
beer();
/*function that returns a specified amount of numbers from the Fibonacci sequence defined in the function call
and generates the Fibonacci sequence in the process*/
function fibonacciGenerator(n){
   var fiboSlice= [0,1];
  if(n===1){
    fiboSlice=fiboSlice.slice(0,1);
  }else{
    for (var i=2;i<n;i++){
      fiboSlice.push(fiboSlice[i-2]+fiboSlice[i-1]);
    }
  }
  return fiboSlice;
}
fibonacciGenerator(2);
