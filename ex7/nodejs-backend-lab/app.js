const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Function to get a database connection
function getDB() {
    return new sqlite3.Database('sample.db');
}

// Route: Home
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Node.js Web Server!</h1>');
});

// Route: List users
app.get('/users', (req, res) => {
    const db = getDB();
    db.all(`SELECT id, name FROM users`, [], (err, rows) => {
        if (err) {
            res.status(500).send("Error retrieving users");
            return;
        }
        let html = '<h2>User List</h2><ul>';
        rows.forEach(user => {
            html += `<li>ID: ${user.id}, Name: ${user.name}</li>`;
        });
        html += '</ul>';
        res.send(html);
        db.close();
    });
});

// Route: Add user via query param
app.get('/add_user', (req, res) => {
    const name = req.query.name;
    if (!name) {
        return;
        res.status(400).send("Please provide a 'name' query parameter");
    }

    const db = getDB();
    db.run(`INSERT INTO users (name) VALUES (?)`, [name], function(err) {
        if (err) {
            res.status(500).send("Error adding user");
            return;
        }
        res.send(`User '${name}' added with ID ${this.lastID}`);
        db.close();
    });
});


// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});