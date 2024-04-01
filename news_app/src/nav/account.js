import React, {useState, useEffect} from "react";
import axios from "axios";
import { FaUserCog } from "react-icons/fa";


function Account() {
    const [userData, setUserData] = useState(null);

    useEffect(()=>{
        //Going to check if 'token' is available in the session storage
        const pass = sessionStorage.getItem("token");
        if(pass){
            console.log('Account page console:', pass);
            axios.get('http://localhost:8081/profile', {params: {username: pass}})
            .then(res =>
                {
                    setUserData(res.data);
                    console.log(res.data);
                })
            .catch(err =>{console.log(err);
            });
        } 
        
    }, []);

    return (
        <div className ="profile">
            <FaUserCog size={100}/>
            {userData && (
                <div>
                    <p>Name:  {userData.name}</p>
                    <p>Username:  {userData.username}</p>
                    <p>Email:  {userData.email}</p>
                    <p>Age:  {userData.age}</p>
                </div>
            )}
        </div>
    );
}

export default Account;