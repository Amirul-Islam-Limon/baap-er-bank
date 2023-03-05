document.getElementById("btn-submit").addEventListener("click",function(){
    const emailField = document.getElementById("user-email");
    const email = emailField.value;
    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;
    
    if(email != "" && password != ""){
        console.log("Valid User!!");
        window.location.href = 'https://amirul-islam-limon.github.io/baap-er-bank/bank.html';
    }
    else{
        alert("Go to in Your father Bank, What are you doing here now?")
    }
})