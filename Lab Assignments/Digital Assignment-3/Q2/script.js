function matchPassword() { 
 var user1='ABC'
 var pw1='XYZ'
 var user2 = document.getElementById("user").value; 
 var pw2 = document.getElementById("pswd").value; 
 if(pw1 == pw2 && user1==user2) 
 { 
 document.write( "Welcome ABC"); 
 } else { 
 document.write("Invalid");
 } 
 }
