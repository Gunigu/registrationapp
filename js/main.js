
var objPeople =	[

{
	username: "Gunel",
	password: "password12"
},

{
	username: "Matt",
	password: "password1"
},

];

function onclick(){
	var usernamevalue= username.value; 
	var commentvalue= comment.value;
	console.log(usernamevalue  +  " " + passwordvalue);



	var username = document.getElementById("username").value;
var  password =document.getElementById("password").value;
    for (i=0; i<objPeople.length; i++){
    	if(username == objPeople[i].username && password == objPeople[i].password){
    		console.log(username + "is logged in!");
    		return;
    	}
    }

    console.log("incorrect username or password");
	}


       

function registerUser()	{
	var registerUser =document.getElementById("newUser").value;
	var registerPassword = document.getElementById("newPassword").value;
	 var newUser = {
		username: registerUser,
		password: registerPassword
	   };
	   
for (i=0; i<objPeople.length; i++){
    	if(registerUsed == objPeople[i].username){
    		alert("that username is already in use, please choose another");
    		return;
    	}else if (registerPassword.length< 8){
    		alert("that password is too short, include 8 or more characters");
    		return ;
    	}
    	}

    
    }
  
  	objPeople.push(newUser);
  	console.log(objPeople);
  



 

                               

