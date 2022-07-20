//Task 1
var myvar1=1, myvar2=42,myvar3=100,myvar4 = 1000;
console.log(myvar1, myvar2, myvar3, myvar4);

var first_name = "Jeevareha";
var last_name = "Ramakrishnan";
var marital_status = "Single";
var country = "India";

var first_name = "Jeevareha", last_name = "Ramakrishnan", age=23;

let my_var = 42;     //a number
let my_var2 = 'bar'; //a string
let my_var3 = true;  //boolean
let f;              //undefined
const my_var4 = null; //null

let strtoint = parseInt("10");
let num = Number("88");
let concat = "ab" + "cd";

console.log(my_var === myvar1);
console.log(my_var === myvar2);
console.log(my_var2 === myvar3);
console.log(my_var3 === myvar4);
console.log(my_var4 === myvar1);
console.log(myvar2 === my_var);
//===================================================================
//Task 2 Simple Programs todo for Operators
//1.Square of a number
let numb = 4;
console.log(`Square of ${numb} is : ${numb*numb}`);

//2.swapping 2 numbers
let a = 5, b = 10;
[a,b] = [b,a];
console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

//3.Addition of 3 numbers
let c=4,d=7,e=9;
let sum = c+d+e;
console.log(`sum of ${c} + ${d} + ${e} is ${sum}`);

//4.Celsius to Farenheit conversion
let cels = 24;
let faren = (cels * 9/5)+32;
console.log(`${cels} celsius to Farenheit is ${faren}`);

//5.meter to miles 
let meter = 563;
let miles = meter/1609.34;
console.log(`${meter} Meter in miles is: ${miles.toFixed(2)}`);

//6.Pounds to kg
let pounds = 30;
let kg = pounds/2.20462;
console.log(`${pounds} Pounds in kilogram is: ${kg.toFixed(2)}`);

//7.Calculate batting Average
var runs = 10000, matches = 250, notout = 50;
Dismmised = matches - notout;
Avg = runs / Dismmised;
console.log(`batting Average of Batsmen with ${runs} Runs in ${matches} Matches with ${notout} is: ${Avg}`);

//8.Calculate five test scores and print their average
var m1=88, m2=76, m3=94, m4=85, m5=93;
avg = (m1+m2+m3+m4+m5)/ 5;
console.log(`Average Score of five tests m1=88, m2=76, m3=94, m4=85, m5=93 is: ${avg}`);

//9.Power of any number x^y:
var x = 3,y=4;
console.log(`Power of any number x^y: ${x**y}`);

//10.Calculate Simple Interest 
var p = 1000,n=2,r=5;
var SI = (p*n*r) / 100;
console.log(`Simple Interest of principle amount ${p} at ${r}% rate in ${n} years is : ${SI}`);

//11.Calculate area of an equilateral triangle
let side = 9;
let area = (Math.sqrt(3)*side)/4;
console.log(`Area of an equilateral triangle with side ${side} is: ${area.toFixed(3)} sq.units`);

//12.Area of Isosceles Triangle
let base = 8, height=12;
let Area = (base * height)/2;
console.log(`Area of Isosceles Triangle with base ${base} and height is: ${Area}`);

//13.Volume of sphere
let rad = 6;
let vol = (4*(Math.PI)*rad*rad*rad)/3; 
console.log(`Volume of sphere with radius ${rad} is: ${vol.toFixed(2)} cu.units`);

//14.Volume of Prism
var B=9,h=7;
console.log(`Volume of Prism with base area ${B} and height ${h} is: ${B*h} cu.units`);

//15.Area of a triangle
var ba_se = 10, he_ight=12;
console.log(`Area of a triangle with base ${ba_se} and height ${he_ight} is: ${(ba_se*he_ight)/2} sq.units`); 

//16.Give the Actual cost and Sold cost, Calculate Discount Of Product
var Actual_cost = 135, Sold_cost = 114;
console.log(`Discount of Product with actual cost ${Actual_cost} and sold cost ${Sold_cost} is ${Actual_cost-Sold_cost}`);

//17.Given their radius of a circle and find its diameter, circumference and area.
let radius = 5.6;
let dia = 2*radius;
let circ = 2* Math.PI * radius;
let ar = Math.PI *radius*radius;
console.log(`The circle with radius ${radius} cm has : diameter ${dia} cm, circumference ${circ.toFixed(2)} cm and area ${ar.toFixed(2)} sq.cm`);

//18.Given two numbers and perform all arithmetic operations
var p=80,q=40;
console.log(`Addition : ${p} + ${q} = ${p+q}
Subtraction :  ${p} - ${q} = ${p-q}
Multiplication: ${p} * ${q} = ${p*q}
division : ${p} / ${q} = ${p/q}
`)

//19.Displaying the asterisk pattern (without loop)
console.log(`
*****
*****
*****
*****
*****`);

//20.Calculate Electricity bill. For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?
var curr_used = 100;
Total = (curr_used *10*30*24)/1000;
console.log(`The total energy bill of that consumer is : Rs.${Total}`)

//Program to calculate CGPA
var marks = [9,10,8,7,8],add =0;
for(i=0;i<marks.length;i++){
    add += marks[i]; 
}
var cgpa = add/marks.length;
console.log(`CGPA of marks ${marks} is: ${cgpa}`);

//==============================================================================

//Task 3
//1.Write a loop that makes seven calls to console.log to output the following triangle:
for(let line = "#";line.length<8;line+="#"){
    console.log(line);
}

//2.Iterate through the string array and print it contents
var strArray= [
       "<option>Jazz</option>",
       "<option>Blues</option>",
       "<option>New Age</option>",
       "<option>Classical</option>",
       "<option>Opera</option>"]
for(i=0;i<strArray.length;i++){
    console.log(strArray[i]);
}

//Arrays
var myarray = [11,22,33,44,55];
var count = 0;
myarray.forEach(element => {
    count += 1;
});
console.log(count);

let foods= [];
foods.push("Chicken","Fish","Crab","Prawn","Mutton","Sambar rice","Tamarind rice","lemon rice","Briyani","Fried rice","Tandoori","Butter Naan","chappathi","Chola poori","Noodles","Dosa","Panneer","Barbeque","Grill","Salad");
console.log(foods[4]);
console.log(foods.length);

//Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.

let friends = ["Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
];
function dataHandling(input){
    for (var i = 0; i < input.length; i++) {
        if(input[i] === "Mari"){
            input[i] = "Munnabai";
        }
    }
    console.log(input);
    for (var i = 0; i < input.length; i++){
        if(input[i] === "CaptianAmerica"){
            break;
        }
        else{
            console.log(input[i]);
        }
    }
}
dataHandling(friends); 

function dataHandling(input, name){
    for (var i = 0; i < input.length; i++) {
        if(input[i] === name){
            console.log(`${name} is a Friend`);
        }
    }
}   
let found = dataHandling(friends,"Jeff");
console.log(found);

//We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.

var friends1 = ["Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];

var friends2 = [
"Gabbar",
"Rajinikanth",
"Mass",
"Spiderman",
"Jeff",
"ET"
];

let friend = [...friends1,...friends2];
function dataHandling1(input){
    input.sort();
    console.log(input);
}
dataHandling1(friend);