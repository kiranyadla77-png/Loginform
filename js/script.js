     function login(){
                window.location.href = "singup_user.html";
    }
    function validName(){
                let user = document.getElementById("username").value;
                let passw = document.getElementById("password").value;

                let usernameregex = /[a-zA-Z]/;
                let passwregex = /[0-9]/;

                if( user === "veerendra" && passw === "12345" ){
                    localStorage.setItem("username", user);
                    console.log(localStorage);
                    window.location.href = "movies.html"; 
                          
              }
               else if( user === "chandrasakher" && passw === "12345" ){
                    localStorage.setItem("username", user);
                    window.location.href = "movies.html"; 
                          
              }
              else if( usernameregex.test(user) && passwregex.test(passw)){
                localStorage.setItem("username" , user );
                window.location.href="movies.html";
              }
            else{
                    document.getElementById("error").innerText = " ⚠ Invalid username or password";
                }
            }
    
 let user = localStorage.getItem("username");
console.log(user);
document.getElementById("figcap").innerText = "welcom, "+user;
document.getElementById("u-name").innerText = "Username : "+user;