const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'news_app'
})

//Setting The API FOR THE PROFILE. HERE WE ADD THE USER DATA TO news_app DATABASE
app.post('/news_app', (req, res) => {
    //CHECK IF THE USER ALREADY EXISTS IN THE DATABASE
    const sqlCheck = "SELECT * FROM profile WHERE `username` = ? OR `email` = ? OR `password` = ?";
    db.query(sqlCheck, [req.body.username, req.body.email, req.body.password],(err, data)=>{
        if(err){
            return res.json("Error");
        }
        //data.length > 0 means that some user has already used either username or email or password
        if(data.length >0){
            return res.json("Some already used this details");
        }
        else{
            //ADDING THE USER TO news_app DATABASE
            const sql = "INSERT INTO profile(`name`,`username`,`email`,`age`,`password`) VALUES (?)";
            const values = [
                req.body.name,
                req.body.username,
                req.body.email,
                req.body.age,
                req.body.password
            ]
            db.query(sql, [values],(err, data)=>{
                if(err){
                    console.log(err);
                    return res.json("Error");
                }
                return res.json(data);
            });
        }

    })
})

//Setting The API FOR THE LOGIN. HERE WE CHECK IF THE USER EXISTS IN THE DATABASE
app.post('/profile',(req, res)=>{
    const sql = "SELECT * FROM profile WHERE `username` = ? AND `password` = ?";
    db.query(sql, [req.body.username, req.body.password],(err, data)=>{
    console.log(req.body.username, req.body.password);
        if(err){
            return res.json("Error in the database");
        }
        if(data.length > 0){
            return res.json("Success");
        }else{
            return res.json("Invalid");
        }
    });
})

//Setting The API FOR THE ACCOUNT PAGE. HERE WE GET THE USER DATA FROM THE DATABASE
app.get('/profile', (req, res)=>{
    const username = req.query.username; // Getting username from query parameters
    const sql = "SELECT * FROM profile WHERE `username` = ?";
    db.query(sql, [username],(err, data)=>{
        console.log('gethere:', username);
        if(err){
            return res.json("Error in the database");
        }

        if(data.length > 0){
            return res.json(data[0]);
        }
        else {
            return res.json("User not found");
        }
    });
});


//Connection
app.listen(8081, ()=>{
    console.log('Server started on port 8081');
})