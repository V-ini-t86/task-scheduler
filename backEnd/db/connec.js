const mysql = require('mysql');

const conn = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "password",
    database: "nodesql"
})


conn.connect((err)=>{
    if(err) throw err;
    console.log("my sql connect successfully ");
})

// table exist or not
const tableExistOrNot = conn.query("show tables like 'Teacher_Batch' " ,(err,result)=>{
    if(err) throw err;
    return result;
})

const str = tableExistOrNot.sql;
// Create table command
if(str.length === 0){
let table  = "create table Teacher_Batch(Id int,Name varchar(50),Start_timing time,End_timing time,Day int,Month varchar(10),Batches varchar(40))";
    conn.query(table,(err,result)=>{
        if(err) throw err;
        console.log("table created successfully ");
        return result;
    }) 
}


module.exports = conn;