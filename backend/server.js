const express =require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const cors=require('cors');


dotenv.config();
const app=express();
app.use(express.json());
app.use(cors());


