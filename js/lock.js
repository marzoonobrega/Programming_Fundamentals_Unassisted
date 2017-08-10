

function passWord() {
var testA = 1;
var pass1 = prompt('Please Enter the key',' ');
while (testA < 3) {
if (!pass1) 
history.go(-1);
if (pass1.toLowerCase() == "test1") {
alert('Correct Password');
window.open('alarm.html');
break;
} 
testA+=1;
var pass1 = 
prompt('Access Denied','Password');
}
if (pass1.toLowerCase()!="password" & testA ==3) 
history.go(-1);
return " ";
} 
