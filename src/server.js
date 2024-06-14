const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sql = require('mssql');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MSSQL Configuration
const dbConfig = {
  user: 'manoraj', // Changed to 'user' instead of 'username'
  password: 'root',
  server: 'localdb',
  database: 'Fruitables',
  options: {
    trustServerCertificate: true,
    trustedConnection: false, enableArithAbort: true,
    instancename: 'Local'
  }
};



// Connect to MSSQL
sql.connect(dbConfig).then(pool => {
  if (pool.connected) {
    console.log('Connected to MSSQL');
  }

  // Define a route to fetch data
  app.get('/', async (req, res) => {
    try {
      const result = await pool.request().query('SELECT * FROM [dbo].[tblCity]');
      res.json(result.recordset);
    } catch (err) {
      console.error('Error querying database:', err);
      res.status(500).send('Error querying database');
    }
  });

}).catch(err => {
  console.error('Database connection failed:', err);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
