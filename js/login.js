document.getElementById("btn-submit").addEventListener("click",function(){
    const emailField = document.getElementById("user-email");
    const email = emailField.value;
    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;
    
    if(email != "" && password != ""){
        console.log("Valid User!!");
        window.location.href = 'http://127.0.0.1:5500/bank.html';
    }
    else{
        alert("Go to in Your father Bank, What are you doing here now?")
    }
})