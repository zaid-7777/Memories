import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';
const app=express()
dotenv.config();
app.use(bodyParser.json({limit:"30mb",extended:true }));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors());
app.use('/posts',postRoutes);
const CONNECTION_URL= 'mongodb+srv://zaid77:Zaidmdarif2001@cluster0.lshf9rk.mongodb.net/?retryWrites=true&w=majority'
const PORT =process.env.PORT||5000;
 
mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=> console.log(`Server Running on port: ${PORT}`)))
    .catch((error)=>console.log(error.message));
