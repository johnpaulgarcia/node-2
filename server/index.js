const express = require('express');
const db = require('./db');
const router = require('./routes');
const app = express();
const PORT = 1234;

app.set('db',db);
app.use(express.json())
app.use("/api",router);
app.listen(PORT,()=>console.log(`Server running smooth on port ${PORT}`));

