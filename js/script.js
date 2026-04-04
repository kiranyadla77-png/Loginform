     function login(){
                window.location.href = "singup_user.html";
    }
    function validName(){
                let user = document.getElementById("username").value;
                let passw = document.getElementById("password").value;
                let number = document.getElementById("phno").value;

                let usernameregex = /[a-zA-Z]/;
                let passwregex = /[0-9]/;
                let numberregex =  /^\d{10}$/;
                if( !usernameregex.test(user) && !passwregex.test(passw)){
                  document.getElementById("error").innerText = " ⚠ Invalid username or password";
                }
                else if( !numberregex.test(number)){
                    document.getElementById("phno-text").innerText = "⚠ Invalid Mobile number";
                }
                else if( user === "veerendra" && passw === "12345" ){
                    localStorage.setItem("username", user);
                    localStorage.setItem("phno" , number);
                    console.log(localStorage);

                    window.location.href = "movies.html"; 
                          
              }
               else if( user === "chandrasakher" && passw === "12345" ){
                    localStorage.setItem("username", user);
                    localStorage.setItem("phno" , number);
                    window.location.href = "movies.html"; 
                          
              }
              else if( usernameregex.test(user) && passwregex.test(passw)){
                 localStorage.setItem("username", user);
                localStorage.setItem("phno" , number);
                window.location.href="movies.html";
              }
            else{
                    document.getElementById("error").innerText = " ⚠ Invalid username or password";
                }
            }
    
 let user = localStorage.getItem("username");
 let phno = localStorage.getItem("phno");
console.log(user);
document.getElementById("figcap").innerText = "welcom, "+user;
document.getElementById("u-name").innerText = "Username : "+user;
document.getElementById("phno").innerText = "Mobileno : "+phno;
