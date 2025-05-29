
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

app.get('/', (req, res) => res.send('Event signup backend running.'));

app.listen(process.env.PORT || 4000, () => {
  console.log('Server running...');
});
