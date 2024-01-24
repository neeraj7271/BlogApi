import express from "express";

const app = express();

const port = process.env.PORT || 3000;

// Define a sample endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Hello, this is your API!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});