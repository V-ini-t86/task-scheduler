const express = require('express');
const Controller = require('./db/CRUD/controller');
const app = express();
require('./db/connec');

app.use(express.json());

Controller(app);
app.get("/",(req,res)=>{
    res.send("hello");
})

app.listen(4000,()=>{
    console.log(`server is running on port 4000`);
})