const Pool = require("pg").Pool;
const pool = new Pool({
    username : "postgres",
    password : "postgres",
    database : "todo_database",
    host     : "localhost",
    port     : 5432,
    url:"postgres://postgres:postgres@localhost/todo_database",
    connector:"postgresql",
    user: "postgres"
});


module.exports = pool