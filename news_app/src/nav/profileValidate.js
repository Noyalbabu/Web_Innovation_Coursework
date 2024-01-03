function profileValidate(values){
    let mistake = {};   
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

    if(values.name === ""){
        mistake.name = 'First name is required'; 
    }
    else{
        mistake.name = "";
    }

    if(values.username === ""){
        mistake.username = 'Last name is required'; 
    }
    else{
        mistake.username = "";
    }

    if(values.email === ""){
        mistake.email = 'Email is required'; 
    }
    else if(!emailPattern.test(values.email)){
        mistake.email = "Email is invalid!";
    }
    else{
        mistake.email = "";
    }

    if (values.password === "") {
        mistake.password = "Create a strong password!";
    }
    else if(!passwordPattern.test(values.password)){
        mistake.password = "Password did not match the requirements!";
    } else{
        mistake.password = "";
    }

    if(values.age === ""){
        mistake.age = 'Age is required'; 
    
    }
    else{
        mistake.age = "";
    }
    return mistake;
}

export default profileValidate;