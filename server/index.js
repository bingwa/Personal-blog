const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for contact form submissions
const submissions = [];

// POST endpoint for contact form
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  submissions.push({ name, email, message, date: new Date() });
  res.status(200).json({ message: 'Submission received!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});