const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors=require('cors')
const app = express();
app.use(cors());
app.use(bodyParser.json());  //it is require for get data from request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const connectToDB = async () => {
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/bookserviceDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true

        });
        console.log("connected to MongoDb");

    } catch (error) {
        console.log(error);
        process.exit(1);

    }
}
connectToDB();


const bookserviceSchema = new mongoose.Schema({
  
  Name: String,
  Phno:Number,
  EmailId: String,
  services:String,
  message:String
  });
  
  
  const BookServices = mongoose.model('BookServices', bookserviceSchema, 'bookservices');

  
  app.get('/getbookedservice/data', async (req, res) => {
    try {
      const data = await BookServices.find();
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("server is started successfully");
});