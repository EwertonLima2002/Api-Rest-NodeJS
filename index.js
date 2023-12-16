const express = require('express');
const app = express();
const porta = 3000;


app.use(express.json())

app.get('/',(req , res) =>{
    res.send("API Rodando")
})


app.listen(porta ,()=>{
    console.log(`API rodando na porta ${porta}`)
})