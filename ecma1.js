
// t1
// function array(str){
    
// return str.split(" ");
// }
const array = (str) => str.split(" ");
const input = "orange jordan";
const output = array(input);
console.log(output);


// t2
let x="0767657777";
function he (x) {
    return "*******" + x.slice(-3)
   
}
console.log(he(x));


// t3

function emi (eee){

     let [aa , bb ] = eee.split("@");
     let ff = aa.slice(0,6) + "...";
     let mm = ff +"@" + bb;
     return mm;

}
let ss = "codin-academy@orang.jo";

console.log(emi (ss));

// t4,5

function capitalWord(words){
    return words
    .split(" ")
    .map(word=>word[0].toUpperCase()+word.slice(1))
    .join(" ");

}
let words="coding academy by orange";
let result=capitalWord(words);
console.log(result);

// t6

let num = 924858;
let num2 = num.toString().split(",").reverse().join();
console.log(num2);

// t7


function swaps (a , b){

[a ,b ] = [ b , a ]
return {a , b}

}

console.log(swaps(3,4));

// t8


// function remo (word){

// let rem1 = ["orange", 3];
// let remo2 = rem1.splice(4)
// return;
// }
// console.log(remo(remo2));


// resolve

 const rem = (y , x)=> {

if ( index <0 || index >= word.lenght){
    return "correct";
}

let result = word.slice(0,index) + word.slice(index+1);
return result;
}

let word = "orange";
let index =3;
console.log(rem(word , index));


// t9

// function chce() {
//     let d1 = "lora";
//     let d2 = "inge";

//     let d11 = d1.slice(1);
//     let d22 = d2.slice(1);
//     let join = d11 + d22;
//     console.log(join);
// }
// chce();

const che = (d1,  d2) => d1.slice(1) + d2.slice(1);
console.log(che("lora", "inge")); 



// t10

var ens = (ch , wo) =>{
return wo.charAt(0) === ch || word.charAt==(wo.lenght-1)==ch;
}
console.log(ens("o" , "orange"));

// t10-2
var re = (ch , wo) => {
    return wo.charAt(0)==ch || wo.charAt==(wo.lenght-1)==ch;
}
console.log(re("z" , "orange"));

// t11

let str = (cut) => {
    
    return cut.split(" ");
}
 console.log ( str("Coding Academy by Orange"));

//  t12

let string = (cov) => {

    return cov.split("").sort().join("");
}
console.log(string("orange"));

// t13