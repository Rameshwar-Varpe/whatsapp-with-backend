const express = require('express');
const { getConnection } = require('./db');

const app = express();

app.get('/chatSection/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const connection = await getConnection();
    const [rows] = await connection.query('SELECT * FROM contacts WHERE contact_id = ?', [id]);
    connection.release();

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

app.listen(4000, () => console.log('Server listening on port 4000'));