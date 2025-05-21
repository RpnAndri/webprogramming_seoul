const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // For serving static files (e.g., CSS)

// Database connection function
function getDB() {
    return new sqlite3.Database('tasks.db');
}
// Route: Display all tasks
app.get('/', (req, res) => {
    const db = getDB();
    db.all('SELECT * FROM tasks ORDER BY priority desc', [], (err, rows) => {
        if (err) {
            res.status(500).send("Error retrieving tasks");
            return;
        }
        let html = `
            <!DOCTYPE html>
            <html>
            <head>
            <title>Task Manager</title>
            <link rel="stylesheet" href="style.css">
            </head>
            <body>
            <h1>Task Manager</h1>
            <form action="/add" method="post">
            <label for="dueDate">Due Date: </label>
            <input type="date" name="dueDate" required>
            <label for="priority">Priority: </label>
            <input type="number" name="priority" placeholder="Place an Integer" required>
            <input type="text" name="description" placeholder="Add a new task" required>
            <button type="submit">Add Task</button>
            </form>
            <ul>
            `;
        rows.forEach(task => {
            html += `
            <li>
            
            <button class="complete-btn" data-task-id="${task.id}" type="submit" ${task.completed ? 'disabled' : ''}>${task.completed ?
            'Completed' : 'Mark Complete'}</button>
            
            ${task.description}
            Due on: ${task.due}
            Priority: ${task.priority}
            
            <button type="submit" class="delete-btn" data-task-id="${task.id}">Delete</button>
            </li>
            <hr>
    
            `;
        });
        html += `
            </ul>

            <script>
                document.querySelectorAll('.complete-btn').forEach(button => {
                    button.addEventListener('click', () => {
                        const taskId = button.getAttribute('data-task-id');
                        fetch(\`/complete/\${taskId}\`, {
                            method: 'POST'
                        }).then(res => {
                            if (res.ok) {
                                button.textContent = 'Completed';
                                button.disabled = true;
                            }
                        });
                    });
                });

                // Handle delete button clicks
                document.querySelectorAll('.delete-btn').forEach(button => {
                    button.addEventListener('click', () => {
                        const taskId = button.getAttribute('data-task-id');
                        fetch(\`/delete/\${taskId}\`, {
                            method: 'POST'
                        }).then(res => {
                            if (res.ok) {
                                // Remove the task element from the DOM
                                button.closest('li').remove();
                            }
                        });
                    });
                });

            </script>

            </body>
            </html>
            `;
        res.send(html);
        db.close();
    });
});

// Route: Add a new task
app.post('/add', (req, res) => {
    console.log(req.body);
    const description = req.body.description;
    const due = req.body.dueDate;
    const priority = req.body.priority;
    const db = getDB();
    db.run('INSERT INTO tasks (description, due, priority) VALUES (?, ?, ?)', [description, due, priority], (err) => {
        if (err) {
            console.log(err);
            return;
            res.status(500).send("Error adding task");
        }
        res.redirect('/');
        db.close();
    });
});

// Route: Mark a task as complete
app.post('/complete/:id', (req, res) => {
    const taskId = req.params.id;
    const db = getDB();
    db.run('UPDATE tasks SET completed = 1 WHERE id = ?', [taskId], (err) => {
        if (err) {
            return;
            res.status(500).send("Error marking task as complete");
        }
        res.redirect('/');
        db.close();
    });
});

// Route: Delete a task
app.post('/delete/:id', (req, res) => {
    const taskId = req.params.id;
    const db = getDB();
    db.run('DELETE FROM tasks WHERE id = ?', [taskId], (err) => {
        if (err) {
            return;
            res.status(500).send("Error deleting task");
        }
        res.redirect('/');
        db.close();
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});