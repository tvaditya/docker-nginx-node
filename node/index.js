const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

const connection = mysql.createConnection(config);

connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    process.exit(1);
  }
  console.log('Connected to the database.');
});

const createTable = `CREATE TABLE IF NOT EXISTS people (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
)`;

connection.query(createTable, (err) => {
  if (err) console.error('Error creating table:', err.stack);
});

app.get('/', (req, res) => {
  const name = `User ${Math.floor(Math.random() * 1000)}`;
  const sql = `INSERT INTO people(name) VALUES ('${name}')`;

  connection.query(sql, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err.stack);
      return res.status(500).send('Error inserting data');
    }

    connection.query(`SELECT * FROM people`, (err, results) => {
      if (err) {
        console.error('Error fetching data:', err.stack);
        return res.status(500).send('Error fetching data');
      }

      const namesList = results.map(person => `<li>${person.name}</li>`).join('');
      res.send(`<h1>Full Cycle Rocks!</h1><ul>${namesList}</ul>`);
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
