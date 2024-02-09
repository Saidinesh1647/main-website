const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors=require('cors');
const bcrypt = require('bcrypt'); // Add bcrypt for password hashing

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


const userSchema = new mongoose.Schema({
  Date: String,
  Name: String,
  EmailId: String,
  Password:String,
  ConfirmPassword:String
    // Add other fields as needed
  });
  
  const UserModel = mongoose.model('User', userSchema,'users');

  const bookserviceSchema = new mongoose.Schema({
  
    Name: String,
    Phno:Number,
    EmailId: String,
    services:String,
    message:String
    });
    
    
    const BookServices = mongoose.model('BookServices', bookserviceSchema, 'bookservices');


//from here

  // Registration Route
app.post('/api/register', async (req, res) => {
  try {
    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create a new user
    const newUser = new UserModel({
      Date: req.body.date,
      Name: req.body.name,
      EmailId: req.body.email,
      Password: hashedPassword,
      ConfirmPassword: hashedPassword,
      // Add other fields as needed
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Login Route
app.post('/api/login', async (req, res) => {
  try {
    const user = await UserModel.findOne({ EmailId: req.body.email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare entered password with stored hashed password
    const isPasswordValid = await bcrypt.compare(req.body.password, user.Password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Authentication successful
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
  
  app.get('/getbookedservice/data', async (req, res) => {
    try {
      const data = await BookServices.find();
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

const port = 5000;
app.listen(port, () => {+
  
    console.log("server is started successfully");
});