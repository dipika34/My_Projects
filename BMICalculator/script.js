let age = document.getElementById("input");

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let  p = document.getElementById("demo");
function Cal() {
    let t = eval(parseFloat(input1.value)/100);
    let e = eval(parseFloat(input2.value) / parseFloat(t*t));
    p.innerHTML = e+"kg/m2";
}
function Clear(){
    age.value="";
    input1.value="";
    input2.value="";
}
  
