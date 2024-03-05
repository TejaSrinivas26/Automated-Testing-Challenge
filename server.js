const express = require('express');
const app = express()
const port = 8089;

let users = [{id:1, name: 'John Doe'}, {id:2, name:'Jane Smith'}];

app.use(express.json());

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Internal Server Error');
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === parseInt(id)); // Handle potential parsing errors
  
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
});

// POST /users - Create a new user
app.post('/users', (req, res) => {
    const { name } = req.body;
  
    if (!name) {
      return res.status(400).send('Name is required'); // Handle missing name
    }
  
    const newUserId = Math.max(...users.map((user) => user.id)) + 1; // Generate a unique ID (replace with a robust ID generation strategy)
    users.push({ id: newUserId, name });
  
    res.status(201).json({ id: newUserId, name }); // Return the newly created user
  });

// PUT /users/:id - Update a user (replace or merge logic as needed)
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
  
    if (!name) {
      return res.status(400).send('Name is required'); // Handle missing name
    }
  
    const userIndex = users.findIndex((user) => user.id === parseInt(id));
  
    if (userIndex !== -1) {
      users[userIndex].name = name;
      res.json(users[userIndex]); // Return the updated user
    } else {
      res.status(404).send('User not found');
    }
});

// DELETE /users/:id - Delete a user
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
  
    const userIndex = users.findIndex((user) => user.id === parseInt(id));
  
    if (userIndex !== -1) {
      users.splice(userIndex, 1);
      res.status(204).send(); // No content to return on successful deletion
    } else {
      res.status(404).send('User not found');
    }
});

app.listen(port, () => {
    console.log(`Server Listening on port ${ port }`);
});