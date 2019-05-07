const express = require('express');
const mysql = require("mysql");
const PORT = 3000;
const path = require("path");

var app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "root1234",
  database: "notes_db"
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"))
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "notes.html"))
});

app.get("/api/notes", function (req, res) {
  connection.query("SELECT * FROM notes", function (err, notesData) {
    if (err) throw err;
    res.json(notesData)
  });
});

app.get("/api/notes/:selected", function (req, res) {
  connection.query("SELECT * FROM notes where id = ?", [req.params.selected], function (err, result) {
    if (err) throw error;
    res.json(result);
  })
})

app.post("/api/newNote", function (req, res) {
  connection.query("INSERT INTO notes SET ? ", req.body, function (err, result) {
    if (err) throw error;
    res.json(result);
  })
});

app.delete("/api/notes/:selected", function (req, res) {
  connection.query("DELETE FROM notes where id = ?", [req.params.selected], function (err, result) {
    if (err) throw error;

    res.json(result);
  })
})

// app.delete("/api/deleteNote", function (req, res) {
//   connection.query("DELETE FROM notes where id = ?", req.body, function (err, result) {
//     if (err) throw error;
//     res.json(result);
//   })
// })

app.listen(PORT, () => console.log("now live on localhost" + PORT));

