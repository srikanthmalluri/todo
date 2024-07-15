const express = require("express");
const app = express()
const pool = require("./db");
const delById = require("./routes/del");

app.use(express.json())


app.post("/todos", async(req,res)=>{
try {
    console.log(req.body)
    const {description } = req.body
    const newTodo =await pool.query("INSERT INTO todo (description) values ($1) returning *",[description]);
    res.json({"description" : description,message:"added to db"});
} catch (error) {
    console.error(error.message)
}
});

app.get("/todos",async(req,res)=>{
    try {
        const getTodo = await pool.query("select * from todo");
        console.log(getTodo.rows)
        res.json({"Todos": getTodo.rows });
    } catch (error) {
        console.error(error.message)
    }
});

app.get("/todos/:id", async(req,res)=>{
    console.log(req.params);
    const id = req.params.id;
    console.log(id)
    const getTodoById = await pool.query("select * from todo where todo_id=($1)",[id])
    res.json(getTodoById.rows);
})

    // app.use(delById)    //for using seperate route file for each api
app.delete("/todos/:id",async(req,res)=>{
    try {
        const id = req.params.id;
        console.log(id);

        const delId= await pool.query("delete from todo where todo_id=($1)",[id])
        res.status(200).json(delId)
    } catch (error) {
        console.error(message)
    }
})

app.listen(3000,()=>{
    console.log("listening on 3000")
})