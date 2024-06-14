
const sql = require("msnodesqlv8");
const connectionString = "server=(localdb)\\Local;Database=Fruitables; Trusted_Connection=Yes¿Driver={SQL Server Native Client 11.0}"; 
const query = "SELECT * FROM [Fruitables].[dbo].[Authentication]";
console.log('dkdkldk')
sql.query(connectionString, query, (err, rows) => { console.log(rows);});