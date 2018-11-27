//index.js
import express from 'express';
import mongoose from 'mongoose';

const uri = "mongodb+srv://vegeadmin:fRA4NDBa6YWyrcdg@vegedb-y459e.mongodb.net/vegedb";
mongoose.connect(uri, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected!');
});

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to GraphQL');
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});