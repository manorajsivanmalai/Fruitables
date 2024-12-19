
 require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = express.Router();
const { createPool } = require('@vercel/postgres');
const serverless = require('serverless-http');
const connectionString=process.env.POSTGRES_URL;


const pool = createPool({
  connectionString: connectionString,
});

const app = express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{res.json("server is running")})

router.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM fruitableuser'); // Adjust table name if necessary
    
    
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.post('/users', async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await pool.query('INSERT INTO fruitableuser(userName, password) VALUES ($1, $2)', [username, password]);
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
 
});

router.get('/reviwes', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM fruitablereviews'); // Adjust table name if necessary
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.post('/reviwes', async (req, res) => {
  try {
    const { name, date,rate,content } = req.body.newrevie;
    const result = await pool.query('INSERT INTO fruitablereviews(name, date,rate,content) VALUES ($1, $2,$3,$4)', [name, date,rate,content]);
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
 
});

app.use('/api/', router);

// app.listen(5000, () => {
//   console.log('Server started on port 5000');
// });

module.exports.handler = serverless(app);



