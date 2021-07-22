let namasteBtn=document.querySelector('button');
namasteBtn.addEventListener('click',inputMsg);

function inputMsg(){
    let name=prompt('Enter Name of Student');
    namasteBtn.textContent='Roll no.1 : '+name;
}
// 1. Ways to print in Javascript
//console.log("Hello World");
//alert("Welcome to JavaScript");
//document.write("Writing to a document");
// 2. Javascript Console API
//console.log("Hello World");
//console.warn("This is a warning");
//console.error("This is an Error");

// Arrays and Objects 
/*var objects={
    mrudula:50,
    rishi:80
}

console.log(objects);*/
//var arr=[1,3,4,6,8];
/*console.log(arr);
*/
// functions in Javascript
/*function avg(a,b){
    return(a+b)/2;
}
console.log(avg(10,40));
console.log(avg(90,40));
*/
// Conditional Statement 
/*var age=-9;
if(age>=18){
    console.log("You can vote");
}
else if(age<0){
    console.log("Invalid Input");
}
else{
    console.log("You cannot vote");
}*/
// For Loop 
// Sum of first 10 natural number
/*let sum=0;
for(let i=1;i<10;i++){
   sum+=i;
}
console.log(sum);
arr.forEach(function(element){
    console.log(element);
})
//while loop
let j=1;
while(j<6){
    if(i==3){
        break;
    }
   console.log(j);
   j++;
}
//do while
let i=7;
do{
    console.log(i);
    i++;
}while(i>10);
*/
/*for(let k=1;k<6;k++){
    if(k==4){
        continue;
    }
    console.log(k);
}*/
// Array Methods
/*var myArr=["Hello","World",67,null,false];
console.log(myArr.length);
myArr.pop();
myArr.push("shivam");
myArr.shift();
console.log(myArr);
const newLen=myArr.unshift("MMK");
console.log(newLen);
console.log(myArr);*/

//String Methods in JavaScript
/*let abc="I love exploring things love!!";
console.log(abc);
console.log(abc.length);
console.log(abc.indexOf("love"));
console.log(abc.lastIndexOf("love"));
console.log(abc.slice(0,17));
var d=abc.replace("love","like");
console.log(d);*/

//Date in JavaScript
/*const date=new Date();
console.log(date.valueOf());*/

//DOM Manipulation
/*let h=document.getElementById('name');
console.log(h);
//h.style.background="#F4D03F";
h.classList.add("bg-primary");
h.classList.add("text-color");
//console.log(h.innerHTML);
//console.log(h.innerText);
tn=document.getElementsByTagName("div");
console.log(tn);
ct=document.createElement("p");
ct.innerText="This is a paragraph";
tn[0].appendChild(ct);
ct2=document.createElement("strong");
ct2.innerText="This is a paragraph with Strong effect";
tn[0].replaceChild(ct2,ct);

//Selecting Query
sel=document.querySelector("#name");
console.log(sel);
*/

//Event Handling
/*container.addEventListener('click',function(){
    console.log("container is Clicked");
})

container.addEventListener('mouseover',function(){
    console.log("Mouse is over container");
})

container.addEventListener('mouseout',function(){
    console.log("Mouse is out of container");
})

container.addEventListener('mouseup',function(){
    console.log("Mouse up container");
})

container.addEventListener('mousedown',function(){
    console.log("Mouse down container");
})*/
//Arrow Function
summ=(a,b)=>{
  return(a+b);
}
login=()=>{
    console.log("You have logged in");
}
//SetTimeOut SetInterval
//SetTimeOut
// clr=setTimeout(login,2000);
// clearTimeout(clr);
// SetInterval
clr=setInterval(login,2000);
clearInterval(clr);