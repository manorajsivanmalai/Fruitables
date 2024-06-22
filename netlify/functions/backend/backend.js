const { createPool } = require('@vercel/postgres');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = express.Router();
const serverless = require('serverless-http');
const pool = createPool({
  connectionString:"postgres://default:oQm2pSXI5ulY@ep-patient-rain-a4vsiaah-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
});

const app = express();

app.use(cors());
app.use(express.json());

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

app.use('/.netlify/functions', router);

module.exports.handler = serverless(app);



