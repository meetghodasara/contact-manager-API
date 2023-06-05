const mongoose = require('mongoose');
require('dotenv').config();

// connectDB is function for database connection.
const connectDB = async () => {
    try{
        // mongoose.connect(process.env.DB_URL);
        // connect is a function call which is call the mongoose.connect with URL.

        const connect = await mongoose.connect(process.env.DB_URL);
        console.log(
            "Database connected: ",
            connect.connection.host,
            connect.connection.name
        )
    }
    catch (error){
        console.log(error);
        process.exit(1); // terminate the system
    }
};

module.exports = connectDB;