function validateLogin(values){
    let mistake = {};
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if(values.username === ""){
        mistake.username = 'Username is required'; 
    }
    else{
        mistake.username = "";
    }

    if (values.password === "") {
        mistake.password = "Password is required";
    }
    else if(!passwordPattern.test(values.password)){
        mistake.password = "Password did not match!";
    }
    else{
        mistake.password = "";
    }
    return mistake;
}

export default validateLogin;