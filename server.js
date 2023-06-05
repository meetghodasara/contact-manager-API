const express = require('express');
const connectDB = require('./config/dbConnection');

const dotenv = require('dotenv').config();

const app = express();

const port = process.env.PORT  || 5000;
connectDB();

app.use(express.json());


app.use("/api/contacts" , require('./Routes/contactRoutes'));

app.listen(port , () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
})