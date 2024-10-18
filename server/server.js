import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import { connectToMongoDb } from './utils/db.js';
import userRouter from './routes/user-route.js';
import taskRouter from './routes/task-route.js';
import categoryRouter from './routes/category-route.js';

// dotenv configuration
config();

// constants variables
const { PORT = 5000, CLIENT_URL } = process.env;
const app = express();

// middilewares
app.use(cors({
    origin: CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(express.json());

// routes handler
app.use('/api/user', userRouter);
app.use('/api/tasks', taskRouter);
app.use('/api/categories', categoryRouter);

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