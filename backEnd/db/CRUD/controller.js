const db = require('../connec');

function Controller(app){
    app.get('/schedule',(req,res)=>{
        db.query("Select * from Teacher_Batch",(err,result)=>{
            if(err) throw err
            res.send(result)
            return result;
        })
    });
    app.post("/schedule",(req,res)=>{
        const sqlInsert="INSERT INTO tasks(task_id,name,start,ending,day,batch) VALUES('1','dsa','2021-12-20 10:00:00','2021-12-20 12:00:00','mon','batch-2');";
        db.query(sqlInsert,(err,result)=>{
            console.log(err);
            res.send("helo mf");
        })
    });

    app.put("/schedule",(req,res)=>{


    });
    app.delete("/schedule",(req,res)=>{


    });
}

module.exports = Controller;