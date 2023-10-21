const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId, } = require("mongodb");
const port =process.env.PORT||5000


app.use(cors());
app.use(express.json());




app.get('/',(req,res)=>{
    res.send('Assignment 10 is running ')
})

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
  });