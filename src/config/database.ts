import 'dotenv/config'
import mongoose from "mongoose";
let dbName: string;

switch (process.env.NODE_ENV) {
    case "test":
        dbName = "todo_test";
        break;
    case "production":
        dbName = "todo";
        break;
    default:
        dbName = "todo_dev";
}
export const database = () => {
    const url = `${process.env.DB_URI}/${dbName}`
    mongoose.connect(url);

    const db = mongoose.connection
    db.once('open', _ => {
        console.log('Database connected:', url)
    })

    db.on('error', err => {
        console.error('connection error:', err)
    })

    // mongoose.connection.on("error", (err) => {
    //     if (err.message.indexOf("ECONNREFUSED") !== -1) {
    //         console.log("Error: The server was not able to reach MongoDB.\nMaybe it's not running?");
    //         process.exit(1);
    //     } else {
    //         throw err;
    //     }
    // })
}