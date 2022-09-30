
let screen = document.getElementById('input');
evalValue = "";
screenData = "";
screen.value = "0";
buttons = document.querySelectorAll('button');
for (item of buttons) {
    item.addEventListener('click', function (e) {
        buttonValue = e.target.innerText;

        if (buttonValue == String.fromCharCode(215)) {
            screenData += String.fromCharCode(215);
            buttonValue = '*';
            evalValue += buttonValue;
            screen.value = screenData;

        }

        else if (buttonValue == String.fromCharCode(247)) {
            screenData += String.fromCharCode(247);
            buttonValue = '/';
            evalValue += buttonValue;
            screen.value = screenData;
        }

        else if (buttonValue == "=") {

            length = evalValue.length;
            console.log(length);

            if (evalValue == "") {

            }

            else if((evalValue.charAt(evalValue.length-1) == "%")){

                console.log("before eval screendata  " + screenData);
                console.log("before eval evalvalue  " + evalValue);
                evalValue = evalValue.substring(0, length-1);
                screen.value = eval(evalValue)/100;
                evalValue = screen.value;
                screenData = screen.value;
                console.log("after eval screendata  " + screenData);
                console.log("before eval evalvalue  " + evalValue)

            }


            else{
                console.log("before eval screendata  " + screenData);
                console.log("before eval evalvalue  " + evalValue);
                screen.value = eval(evalValue);
                evalValue = screen.value;
                screenData = screen.value;
                console.log("after eval screendata  " + screenData);
                console.log("before eval evalvalue  " + evalValue);
            }

        }

        else if (buttonValue == "DEL") {
            if (screen.value == "0") {

            }
            else {
                size = screen.value.length;
                screen.value = screen.value.substring(0, size - 1);
                evalValue = evalValue.substring(0, size - 1);
                screenData = screen.value;
            }

        }

        else if (buttonValue == "AC") {
            screenData = "";
            screen.value = "0";
            evalValue = "";

        }

        else if (buttonValue == String.fromCharCode(8730)) {
            screenData += (String.fromCharCode(8730) + "(");
            buttonValue = 'Math.sqrt(';
            evalValue += buttonValue;
            screen.value = screenData;
        }

        else if (buttonValue == String.fromCharCode(177)) {
            console.log("clicked +-");

            if (evalValue == "0") {
            }

            else {

                screenData = -parseFloat(screenData);
                buttonValue = '';
                evalValue = -parseFloat(evalValue);;
                screen.value = screenData;

            }


        }

        else {
            screenData += buttonValue;
            evalValue += buttonValue;
            screen.value = screenData;
        }
    })
}
function additionAlert() {
    alert("Performing addition operation");
}
function subAlert() {
   alert("Performing subtraction operation");
}
function mulAlert() {
   alert("Performing multiplication operation");
}
function divAlert() {
   alert("Performing division operation");
}
function decimalInputAlert() {
    alert("Input contains decimal values");
 }
function changeOutputColor(color){
    document.getElementById("input").style.background = color;
}
function defaultColor(color){
    document.getElementById("input").style.background = color;
}
function check()
{
var re = /^[-+]?[0-9]+\.[0-9]+$/;
let found = screenData.match( re )?true:false
if(found==true)
{
    window.alert("Output contains decimal value");
}
window.alert(found);
}
// window.alert(screen.value)
  console.log(buttons);
