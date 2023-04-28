const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
app.use(express.json());
app.use(cors())

// Mongoose connection string
mongoose.connect(
    .env.process.mongoose_url
// database connect
const db = mongoose.connection;
db.on('error',(error)=>{
    console.log(error);
});
db.once('connected',()=>{
    console.log('MongoDB connected');
})

// importing routers
const loginRouter = require('./Routes/login.route')
const signupRouter = require('./Routes/signup.route')
// using routers
app.use('/login',loginRouter);
app.use('/signup',signupRouter)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log('Server is running on port ' + port);
})
