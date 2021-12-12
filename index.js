const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host:"localhost",
    user: "root",
    password: "root",
    database: "nodemysqlreact",
});

app.use(cors());
app.use(express.json());

app.post("/registrar", (req, res)=>{
    const { nome } = req.body;
    const { valor } = req.body;
    const { categoria } = req.body;

    let SQL = "INSERT INTO nodemysql (nome, valor, categoria) values (?, ?, ?)";
    
    db.query(SQL, [nome, valor, categoria], (err, result) => {
        console.log(err);
    });

});

app.get("/getCards", (req, res) =>{
    let SQL = "SELECT * FROM nodemysql";
    db.query(SQL, (err, result) =>{
        if(err) console.log(err);
        else res.send(result)
    })

})

/*app.get('/', (req, res) => {
    let SQL = "INSERT INTO nodemysql (id, nome, valor, categoria) values (1,'test', '120', 'acao')";
    db.query(SQL, (err, result) =>{
        console.log(err);      
    });
});*/

app.listen(3001, ()=> {
    console.log("server on");
})