
//function date_now() {
//	
//    var d = new Date();
//    var n = d.getFullYear();
//	document.getElementById("current").innerHTML = n;
//	
//	}
	
function sendage() {
		
	var f = document.getElementById("u19").options;
	
	if (f === "u19") {
		window.location = "u19.html";
		}
	
	}	
	
	
function age() {
	
var d = new Date();
var n = d.getFullYear();
var x = document.getElementById("1").value;
var y = n - x
if( y == 19 || y == 18) {

	document.getElementById("message").innerHTML = "<h1 class='message'><i class='fa fa-thumbs-up'> Able to Play</i> <br /> His age is " + y +"</h1>";
	return;	
		
	} else if(y <= 17){
		document.getElementById("message").innerHTML = "<h1 class='message_alt'><i class='fa fa-thumbs-down'> Not Able to Play</i> <br /> His age is " + y + "</h1>";
		return;	
		}
		
	else if(y > 19){
		document.getElementById("message").innerHTML = "<h1 class='message_alt'><i class='fa fa-thumbs-down'> Not Able to Play</i> <br /> His age is " + y + "</h1>" ;
		return;	
		}		
		
		return;	
		
		}
		
		
function age2() {
	
var d = new Date();
var n = d.getFullYear();
var x = document.getElementById("2").value;
var y = n - x
if( y == 18 || y == 17) {

	document.getElementById("message").innerHTML = "<h1 class='message'><i class='fa fa-thumbs-up'> Able to Play</i> <br /> His age is " + y +"</h1>";
	return;	
		
	} 
	
	else if(y <= 16){
		document.getElementById("message").innerHTML = "<h1 class='message_alt'><i class='fa fa-thumbs-down'> Not Able to Play</i> <br /> His age is " + y + "</h1>" ;
		return;	
		}
		
	else if(y > 18){
		document.getElementById("message").innerHTML = "<h1 class='message_alt'><i class='fa fa-thumbs-down'> Not Able to Play</i> <br /> His age is " + y + "</h1>";
		return;	
		}		
		
		return;	
		
		}	
			
		
function resetage() {
	window.location.reload(true);
	}		
	
