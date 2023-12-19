//importing modules
 import dotenv from 'dotenv'
import mongoose from 'mongoose'

  //details from the env
const username = process.env.USERNAME
const password = process.env.PASSWORD
const dbName = 'dbase2'
console.log(username,password,dbName,"PRINTING ALL DETAILS:");

//mongodb://username:password@host:port/database
//const connectionString = `mongodb+srv://:priyanshijain:jPZjaVoXnzH5Avrk@cluster0.n5djpap.mongodb.net/${dbName}?retryWrites=true&w=majority`
//const connectionString =`mongodb+srv://priyanshijain:jPZjaVoXnzH5Avrk@cluster0.n5djpap.mongodb.net/`

const connectionString =`mongodb://priyanshijain:jPZjaVoXnzH5Avrk@host:4040/${dbName}`
console.log(connectionString,">>>>>");
// mongodb+srv://priyanshijain:<password>@cluster0.n5djpap.mongodb.net/

//mongodb+srv://cluster0.n5djpap.mongodb.net/

const options = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };

//db connection
export const db = mongoose.connect(connectionString, options)
.then(res => {
    if(res){
        console.log(`Database connection succeffully to ${dbName}`)
    }
    
}).catch(err => {
    console.log(">>>>>>err",err,"error in mongo")
})

