import express from 'express'
import mongoose from 'mongoose'

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/octofit'
const PORT = Number(process.env.PORT || 8000)

const app = express()
app.use(express.json())

app.get('/', (_req, res) => {
  res.json({ status: 'ok', service: 'octofit-backend' })
})

async function start() {
  try {
    await mongoose.connect(MONGO_URL)
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`)
      console.log(`Connected to MongoDB at ${MONGO_URL}`)
    })
  } catch (err) {
    console.error('Failed to start server', err)
    process.exit(1)
  }
}

start()
