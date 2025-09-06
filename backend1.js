// file: index.js

const express = require("express");
const app = express();
const PORT = 3000;

// Middleware biar bisa baca JSON
app.use(express.json());

// Route root
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Route API simpel
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// Route POST latihan
app.post("/api/echo", (req, res) => {
  const data = req.body;
  res.json({ you_sent: data });
});

// Route baru: kasih waktu server sekarang
app.get("/api/time", (req, res) => {
  const now = new Date();
  res.json({ server_time: now.toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
