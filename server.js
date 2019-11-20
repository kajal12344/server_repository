const express = require('express')
const mysql = require('mysql');

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

function connect(){
    const connection = mysql.createConnection({
        host:'200.0.1.165',
        user:'root',
        password:'root',
        database:'app_db1',
        port:9099
    })

    connection.connect()
    return connection
}



app.get("/",(req,res)=>{
    res.send("Welcome...");
});

app.get("/emp",(req,res)=>{
   const connection = connect()
   const statement = 'select * from employees'
   connection.query(statement,(error,data)=>{
        connection.end()
        console.log(error);
        res.send(data);
   })
});



app.listen(2000,'0.0.0.0',()=>{
    console.log('server started on port 2000');
})

