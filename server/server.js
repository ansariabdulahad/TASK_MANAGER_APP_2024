import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import { connectToMongoDb } from './utils/db.js';

// dotenv configuration
config();

// constants variables
const { PORT = 5000, CLIENT_URL } = process.env;
const app = express();

// middilewares
app.use(cors({
    origin: CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// routes handler

// error handler
app.use((err, req, res, next) => {
    console.log(err.stack || err);
    res.status(500).json({
        success: false,
        message: "ERROR FROM SERVER, SOMETHING WENT WRONG!",
        error: err.stack || err
    });
})

// mongodb connection and server listening
connectToMongoDb()
    .then(() => {
        app.listen(PORT, (err) => {
            if (err) console.log(err);
            console.log(`Server listening on ${PORT}`);
        });
    }).catch((err) => {
        console.log(err);
    });