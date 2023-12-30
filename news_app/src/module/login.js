import React from "react";


function Login(){
    return(
        <div>
            <h1>Login Page</h1>
            <div>
                <form action="">
                    <label htmlFor="username">Username:</label><br />
                    <input type="text" name="username"  placeholder="Enter username"/><br />
                    <label htmlFor="password">Password:</label><br />
                    <input type="password" name="password" /><br />
                    <button type="submit">Login</button>
                    <p>Do not have an account? Setup a Profile!</p>
                    <a href="/profilePage" >
                        <button type="button">Profile</button></a>
                </form>
            </div>
        </div>
    );
}

export default Login;