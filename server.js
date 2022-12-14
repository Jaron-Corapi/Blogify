import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()

// db
import connectDB from './db/connect.js'

// routers
import authRouter from './routes/authRoutes.js'


// middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

app.use(express.json())

app.get('/api', (req, res) => {
  res.json('Welcome! You are talking to the server!')
})

app.use('/api', authRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()