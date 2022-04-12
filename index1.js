// var id8 = document.getElementById("eight");
var ans = document.getElementById("space");
var id1 = document.getElementById("one");
var id2 = document.getElementById("two");
var id3 = document.getElementById("three");
var id4 = document.getElementById("four");
var id5 = document.getElementById("five");
var id6 = document.getElementById("six");
var id7 = document.getElementById("seven");
var id8 = document.getElementById("eight");
var id9 = document.getElementById("nine");
var id0 = document.getElementById("zero");
var d = document.getElementById("divide");
var m = document.getElementById("multiply");
var a = document.getElementById("add");
var s = document.getElementById("subtract");
var o = document.getElementById("percentage");
var equal=document.getElementById("equal");
var clear = document.getElementById("clear");
clear.addEventListener("click",()=>{
    ans.value="";
});
o.addEventListener("click",()=>{
    ans.value+="%";
});

d.addEventListener("click",()=>{
    ans.value+="/";
});
m.addEventListener("click",()=>{
    ans.value+="*";
});
a.addEventListener("click",()=>{
    ans.value+="+";
});
s.addEventListener("click",()=>{
    ans.value+="-";
});
equal.addEventListener("click",()=>{
    ans.value=eval(ans.value);
});
id0.addEventListener("click",()=>{
    ans.value+=0;
});
id1.addEventListener("click",()=>{
    ans.value+=1;
});
id2.addEventListener("click",()=>{
    ans.value+=2;
});
id3.addEventListener("click",()=>{
    ans.value+=3;
});
id4.addEventListener("click",()=>{
    ans.value+=4;
});
id5.addEventListener("click",()=>{
    ans.value+=5;
});
id6.addEventListener("click",()=>{
    ans.value+=6;
});
id7.addEventListener("click",()=>{
    ans.value+=7;
});
id8.addEventListener("click",()=>{
    ans.value+=8;
});
id9.addEventListener("click",()=>{
    ans.value+=9;
});