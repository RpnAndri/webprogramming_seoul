const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('sample.db');

db.serialize(() => {
    // Create table
    db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
    )`);
    // Insert sample data
    db.run(`INSERT INTO users (name) VALUES ('Alice')`);
    db.run(`INSERT INTO users (name) VALUES ('Bob')`);
    db.run(`INSERT INTO users (name) VALUES ('Charlie')`);
    console.log("Database setup complete.");
});
db.close();