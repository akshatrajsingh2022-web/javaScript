//DATA TYPES
// Primitive= All those values which when copied give a new real copy

let a=34;
let b=a;
b=a;
a+=3;
console.log(a);
console.log(b);



//  Null and undefined

let a=null;
console.log(a);
let b;
console.log(b);


//Symbols=Unique immutable value

let u1=Symbol("uid");
let u2=Symbol("uid");

let obj={
    uid:1,
    name:"Akshat raj",
    age:32
};
let u1=Symbol("uid");
obj[u1]="001";
console.log(u1===u2);


//Bigint

let a= Number.MAX_SAFE_INTEGER;
console.log(a);
a+=3;
console.log(a);

let a=12345678900987654321345678n;




// Reference= All those values which when copied give the address of its parent

//Array
let a=[1,3,5];
let b=a;
console.log(a);
console.log(b);

a.push(333)
console.log(a);
console.log(b);


//objects
let obj1={
    uid:1,
    Name:"harsh"
}
let obj2=obj1;
obj2.Name="harshitaa";
console.log(obj1);
console.log(obj2);

//Dynamic Typing-js mai static typing nhi hoti it uses dynamic typing which means we can change data and its type without getting error 
let a=23;
a=true;
a=null;
a=[];
a=5432n;

//Type coercion- concept using which js automatically convert one of the datatype into another datatype to perform operation
console.log(43+"1");
console.log(32-"1");


//Truthy vs Falsy values
if(-1) console.log("hellow");