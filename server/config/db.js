const mongoose = require('mongoose')


// function to connect our server to the database

module.exports = async () => {
    try {
        mongoose.set('strictQuery', false);
        
        await mongoose.connect(process.env.DB_URI)
        console.log('connected to DB');

    } catch (error) {
        console.log('error connecting to the DB', error.message);

        process.exit(1)
    }

}