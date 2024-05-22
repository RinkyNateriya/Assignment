const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./src/router/appRouter');
const bodyParser = require('body-parser');

const connectiondb = require('./src/db-config/dbconection');
const app = express();
app.use(cors());
app.use(bodyParser.json());
connectiondb();


app.use(router);

mongoose.connect("mongodb://127.0.0.1:27017/MyTaskDataBase", { useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));

const PORT = process.env.PORT || 8010; 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});











// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
