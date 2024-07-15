const express = require("express")
const app  = express()

const pool = require("../db")

const delById = app.delete("/todos/:id",async(req,res)=>{
    try {
        const id = req.params.id;
        console.log(id);

        const delId= await pool.query("delete from todo where todo_id=($1)",[id])
        res.status(200).json(delId)
    } catch (error) {
        console.error(message)
    }
})

module.exports = delById