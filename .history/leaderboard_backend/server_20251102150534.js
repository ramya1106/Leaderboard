const express = require("express");
const sqlite3 = require("sqlite3");
const cors = require("cors");

const app = express();
app.use(express.json());

// ✅ CORS FIX
app.use(
  cors({
    origin: [
      "http://localhost:3000",                 // local React dev
      "https://leaderboard-6dkp.onrender.com"  // deployed frontend
    ],
  })
);

// connect DB
const db = new sqlite3.Database("students.db");

// GET all students
app.get("/students", (req, res) => {
  db.all("SELECT * FROM students", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });

    const formatted = rows.map(row => ({
      ...row,
      skillBadgesList: JSON.parse(row.skillBadgesList),
      arcadeGamesList: JSON.parse(row.arcadeGamesList)
    }));

    res.json(formatted);
  });
});

// GET student by ID
app.get("/students/:id", (req, res) => {
  const { id } = req.params;

  db.get("SELECT * FROM students WHERE sno = ?", [id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ message: "Student not found" });

    row.skillBadgesList = JSON.parse(row.skillBadgesList);
    row.arcadeGamesList = JSON.parse(row.arcadeGamesList);

    res.json(row);
  });
});

// Start server
app.listen(5000, () =>
  console.log("Server running on port http://localhost:5000")
);
