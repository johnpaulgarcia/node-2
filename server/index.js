const express = require('express');
const db = require('./db');
const router = require('./routes');
const app = express();
const PORT = 1234;
const HOST = '127.0.0.1';
app.use(express.json())
app.set('db',db);
app.use("/api",router);
app.get('/',(req,res)=>{
	res.sendFile(__dirname+"/landing.html");
})
app.listen(PORT,HOST,()=>console.log(`API running smooth on ${HOST}:${PORT}/api`));

