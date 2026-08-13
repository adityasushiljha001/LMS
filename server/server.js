import dns from 'node:dns';
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js';

dns.setServers([
    '8.8.8.8',
    '1.1.1.1'
]);
// Initializa Express
const app=express()

// Connect to database
await connectDB()

// Middlewares
app.use(cors())

// Routes
app.get('/',(req,res)=> res.send("API Working"))
app.post('/clerk',express.json(),clerkWebhooks)



// Port
const PORT=process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})