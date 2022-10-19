const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// mongodb connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true}
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const worldRouter = require('./routes/worlds');
const storyRouter = require('./routes/stories');
const userRouter = require('./routes/users');

app.use('/worlds', worldRouter);
app.use('/stories', storyRouter);
app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});