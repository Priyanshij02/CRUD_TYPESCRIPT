import dotenv from 'dotenv';

dotenv.config();

// declare all variable:
const MONGO_DB_USER= process.env.MONGO_DB_USER || '';
const NODE_ENV= process.env. NODE_ENV || '';
let MONGO_DB_PASSWORD= process.env. NODE_DB_PASSWORD || '';


// mongodb+srv://priyanshijain:<password>@cluster0.vkxnfnc.mongodb.net/?retryWrites=true&w=majority

const MONGO_URL = `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@cluster0.vkxnfnc.mongodb.net/?retryWrites=true&w=majority`;
const SERVER_PORT = process.env.PORT ? Number(process.env.PORT) : 5000;
const MONGO_URL_LOCAL = `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@cluster0.vkxnfnc.mongodb.net/?retryWrites=true&w=majority`;

//CREATE CONFIG OBJECT
const config = {
    mongo: {
        url: MONGO_URL,
    },
    server: {
        port: SERVER_PORT,
    },
};
// check for wnviornment:
if (NODE_ENV === 'production') {
    config.mongo.url = MONGO_URL;
    config.server.port = SERVER_PORT;
} else if (NODE_ENV === 'local') {
    config.mongo.url = MONGO_URL_LOCAL;
    config.server.port = SERVER_PORT;
}

 export default config;