const express =require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const cors=require('cors');


dotenv.config();
const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>console.log(`MongoDB connected successfully.`))
.catch(error=>console.log(`Error occurred:${error}`));
const port=process.env.PORT||3000;
app.listen(port, ()=>console.log(`Server is running at port:${port}`));

