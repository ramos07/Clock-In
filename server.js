import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'

// Initialize environment variables
dotenv.config()

// Establish connection with MongoDB database
connectDB()

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Api is working")
})

// User routes
app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
})