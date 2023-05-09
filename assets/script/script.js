 validateLogin=()=>{
    let email=document.loginForm.email.value;
    let password=document.loginForm.password.value;

    if(email=="" || email==null){
        document.getElementById("email").style.borderColor="red";
        return false;
    }
    
    if(password==""){
        document.getElementById("password").style.borderColor="red";
        return false;

    }
}

registerValidation=()=>{
    let name=document.registerForm.name.value;
    let email=document.registerForm.email.value;
    let dob=document.registerForm.dob.value;
    let distination=document.registerForm.distination.value;
    let education=document.registerForm.education.value;
    let password=document.registerForm.password.value;
    let c_password=document.registerForm.c_password.value;

    if(name=="" & email=="" & dob=="" & distination=="" & education=="" & password=="" & c_password==""){
        document.getElementById("name").style.borderColor="red";
        document.getElementById("email").style.borderColor="red";
        document.getElementById("dob").style.borderColor="red";
        document.getElementById("distination").style.borderColor="red";
        document.getElementById("education").style.borderColor="red";
        document.getElementById("password").style.borderColor="red";
        document.getElementById("c_password").style.borderColor="red";

        return false;
    }
    if (password<=6) {
        prompt("password should be in 6")
    }
    if(c_password!=password){
        alert("password not matching");
        
    }

}