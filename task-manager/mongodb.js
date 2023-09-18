// CRUD operations
const mongodb=require("mongodb")
const MongoClient=mongodb.MongoClient
const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        console.log("Unable to connect to DB:", error); // Print the error message
        return;
    }
    console.log("Connected to DB");
});
