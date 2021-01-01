const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = 4000;
const app = express();

const mongoURI = `mongodb+srv://Andrew:1234qwer@cluster0.isshf.mongodb.net/food?retryWrites=true&w=majority`;

app.use(cors());

async function start() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    const connection = mongoose.connection;
    connection.once('open', () => console.log('MongoDB was open'));
    app.listen(PORT, function () {
      console.log(`Server is run`);
    });
  } catch (error) {
    console.log('NODEJS Server error:' + error.message);
    process.exit(1);
  }
}

start();
