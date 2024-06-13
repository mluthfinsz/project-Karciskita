const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  // Create database if it doesn't exist
  db.query('CREATE DATABASE IF NOT EXISTS karciskita', (err, result) => {
    if (err) {
      console.error('Error creating database:', err);
      return;
    }

    // Switch to the database
    db.changeUser({ database: 'karciskita' }, (err) => {
      if (err) {
        console.error('Error switching to database:', err);
        return;
      }

      // Create table if it doesn't exist
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS login (
          id INT AUTO_INCREMENT PRIMARY KEY,
          email VARCHAR(255) NOT NULL,
          password VARCHAR(255) NOT NULL
        )`;
      db.query(createTableQuery, (err, result) => {
        if (err) {
          console.error('Error creating table:', err);
          return;
        }
      });
    });
  });
});

// Register endpoint
app.post('/register', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  const sql = 'INSERT INTO login (email, password) VALUES (?, ?)';
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error('Database error during registration:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    console.log('User registered with email:', email);
    return res.status(201).json({ message: 'User registered' });
  });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  const sql = 'SELECT * FROM login WHERE email = ?';
  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error('Database error during login:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (results.length === 0) {
      return res.status(400).json({ error: 'User not found' });
    }

    const user = results[0];
    console.log('Database user:', user); // Log user data

    if (password !== user.password) {
      console.log('Invalid password');
      return res.status(401).json({ error: 'Invalid password' });
    }

    const token = jwt.sign({ userId: user.id }, 'test', { expiresIn: '1h' });
    return res.json({ token });
  });
});

app.get('/verifyToken', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, 'test', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    const sql = 'SELECT * FROM login WHERE id = ?';
    db.query(sql, [decoded.userId], (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
      // Mengembalikan user dengan email
      return res.json({ user: results[0] });
    });
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
