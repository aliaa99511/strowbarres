
/*************************************************************** */
/*counter*/
var head=document.getElementById("head");
var link=document.getElementById("link");
var count = 10;

function repetition (){
    head.innerHTML = count;
    count--;

    if(count < 0){
        head.classList.add("hidden");
        link.classList.remove("hidden");
    }
    setTimeout(repetition,1000);
}
repetition();
/******************************************************************* */


/****************************************************************** */
/*inputletters*/
var inputt=document.getElementById("inputt");
var texts="Welcome to javascript language";
var start=0;

function inputletters (){
    inputt.innerHTML += texts[start];
    start++; 

    var set=setTimeout(inputletters,300);

    if(start > texts.length-1){
        clearInterval(set)
    }
}
inputletters();
/******************************************************************** */



/********************************************************************** */
/*strowbarry*/

//margin-left: 485px;

var img1=document.getElementById("img1");
var img2=document.getElementById("img2");

var run1 = 10;
var run2 = 50;

function strowbarry (){

    img1.style.marginLeft = run1 + "px";
    img2.style.marginLeft = run2 + "px";

    run1++;
    run2++;

    var increase=setTimeout(strowbarry,5);

    if(run1 > 150){
        clearInterval(increase);
    }

    if(run2 > 300){
        clearInterval(increase);
    }
}
strowbarry();
/*************************************************************** */



/****************************************************************** */
/*header*/

var header=document.getElementById("header");

var bigger = 10;

function heading (){

    header.style.fontSize = bigger + "px";
    bigger++;

    var big=setTimeout(heading,30);

    if(bigger > 65){
        clearInterval(big);
    }
}
heading();
/************************************************* */