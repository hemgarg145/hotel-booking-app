import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import cors from 'cors'
import { clerkMiddleware } from '@clerk/express'
import connectDB from './configs/db.js'
import clerkWebhooks from './controllers/clerkWebhooks.js'
import userRouter from './routes/userRoutes.js'
import hotelRouter from './routes/hotelRoutes.js'
import connectCloudinary from './configs/cloudinary.js'
import roomRouter from './routes/roomRoutes.js'
import bookingRouter from './routes/bookingRoutes.js'

connectDB();
connectCloudinary();
const app = express()

//enable frontend to connect backend
app.use(cors())

// middleware
app.use(express.json())
app.use(clerkMiddleware())

// api to listen to clerk webhooks
app.use('/api/clerk' , clerkWebhooks)

app.get('/', (req, res) => {
    res.send("API is Working...");
})
app.use('/api/user', userRouter);
app.use("/api/hotels", hotelRouter);
app.use('/api/rooms', roomRouter);
app.use('/api/bookings', bookingRouter)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server is running on PORT : ${PORT}`);
})