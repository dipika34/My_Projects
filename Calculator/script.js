const display = document.getElementById("display");
function input(val){
    display.value+=val;
}
function Calculate(){
    display.value=eval(display.value);
}
function Clear(){
    display.value="";
}
