function sendage() {
		
	var f = document.getElementById("u19").options;
	
	if (f === "u19") {
		window.location = "u19.html";
		}
	
	}	
	
	
function u19() {
	
var d = new Date();
var n = d.getFullYear();
var x = document.getElementById("1").value;
var y = n - x

if (y >= 22 || y <= 4) {
	
	showStickyNoticeToast();
	return;
	
	}


if (x == null || x == "") {
	showStickyErrorToast();
	return;
	}


else if( y == 19 || y == 18) {
	document.getElementById("message").innerHTML = "<h3 class='message'>His age is " + y +"</h3>";
	showStickySuccessToast();
	return;	
		
	} else if(y <= 17){
		showStickyWarningToast();
		document.getElementById("message").innerHTML = "<h3 class='message_alt'> His age is " + y + "</h3>";
		return;	
		}
		
	else if(y > 19){
		showStickyWarningToast();
		document.getElementById("message").innerHTML = "<h3 class='message_alt'>His age is " + y + "</h3>" ;
		return;	
		}		
		
		return;	
		
		}
		
 
		
		
function u18() {
	
var d = new Date();
var n = d.getFullYear();
var x = document.getElementById("2").value;
var y = n - x

if (x == null || x == "" ) {
	showStickyErrorToast();
	return;
	}

else if( y == 18 || y == 17) {

	document.getElementById("message").innerHTML = "<h3 class='message'>His age is " + y +"</h3>";
	showStickySuccessToast();
	return;	
		
	} 
	
	else if(y <= 16){
		showStickyWarningToast();
		document.getElementById("message").innerHTML = "<h3 class='message_alt'>His age is " + y + "</h3>" ;
		return;	
		}
		
	else if(y > 18){
		showStickyWarningToast();
		document.getElementById("message").innerHTML = "<h3 class='message_alt'>His age is " + y + "</h3>";
		return;	
		}		
		
		return;	
		
		}	
			
		
function resetage() {
	window.location.reload(true);
	}		
	
