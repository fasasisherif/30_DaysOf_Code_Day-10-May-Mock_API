var api_replys = {
		gold:"CONGRATS, You have subscribed for the Gold plan", 
		silver:"CONGRATS, You have subscribed for the Silver plan", 
		bronze:"CONGRATS, You have subscribed for the Bronze plan"
		}

var sus1 = document.getElementsByClassName("sus1");
var sus2 = document.getElementsByClassName("sus2");
var sus3 = document.getElementsByClassName("sus3");
var api1 = document.getElementsByClassName("api_reply1");
var api2 = document.getElementsByClassName("api_reply2");
var api3 = document.getElementsByClassName("api_reply3");

sus1[0].addEventListener("click",myfunc1);
sus2[0].addEventListener("click",myfunc2);
sus3[0].addEventListener("click",myfunc3);

var a = 0;
function myfunc1(){
api1[0]	.innerHTML = api_replys.gold;	
a++;	
	
if (a%2 == 0){
api1[0]	.innerHTML = " ";		
		}	
	}

var b = 0;
function myfunc2(){
api2[0]	.innerHTML =api_replys.silver;	
b++;	
	
if (b%2 == 0){
api2[0]	.innerHTML = " ";		
		}	
	}

var c = 0;
function myfunc3(){
api3[0]	.innerHTML =api_replys.bronze;	
c++;	
	
if (c%2 == 0){
api3[0]	.innerHTML = " ";		
		}	
	}
