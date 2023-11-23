const mongoose = require('mongoose');

const connectdb = async () => {
    try {
        await mongoose.connect("mongodb+srv://vinodvinod0979:vinod7144@cluster0.01tj5jp.mongodb.net/?retryWrites=true&w=majority", {
            dbName: "Zomato",
        })
        console.log("Connected to MongoDB")
    }
    catch (err) {
        throw new Error("Couldn't connect to MongoDB")
    }
}
module.exports = connectdb
