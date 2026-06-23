// properties of var
var a=43;
console.log(a);

// 1)It will added to window
var b="hellow"
//now if we write window in our web console it will be there


// 2)It is functional scoped
function abc(){
    if(true){
        var c="yes we can this variable anywhere in this function"
    }
    console.log(c);
}
abc();


// 3)We can redefine it 
var name="rohan";
var name="Akshat";


//Scope (global,block and functional)
 /* 

 1) Global
 var a=32;
 It can be used anywhere inside this script.js

2)Block
{
var x=55;
}
But var doesn't respect block so it can be used anywhere inside this script as var is a functional scoped..

where as let follow block scoped
{
    let a=32;
}

3)Functional 
function abc(){
    if(true){
        var c="yes we can this variable anywhere in this function"
    }
    console.log(c);
 */


/* 
    Temporal Dead Zone

    .. In let it gives can't access t before initialization
    console.log(t);
    let t=34;

    .. Where as in var it gives undefined
    console.log(t)
    var t=34;

*/



/*
    Hoisting impact per type
    Hoisting=Whenever we create a variable it will break into two part-
    1)var a =undefined;  = declare
    2)a=32;  = initialization
    
    declare part will go at the top whereas initiazation part stay where we create that variable

    console.log(k);
    let k=43;
*/