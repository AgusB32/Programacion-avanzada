// import express
const express = require('express');

// crear a new express app
const app = express();

//create a new port
const PORT = process.env.PORT || 3000;

// middleware to parse the body of the request JSON
app.use(express.json());

// base de datos en memoria (se pierde cuando se reinicia el servidor)
let users = [];
let nextId = 1;

// GET /users
app.get('/users', (req, res) => {
    res.json({ users });
});

// GET /users/:id
app.get('/users/:id', (req, res) => {
    const Id = Number(req.params.id);
    const user = users.find(u => u.id === Id);
    if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json({ user });
});

// POST /users
// Crear un nuevo usuario
// Body JSON esperado: { name: string, email: string }
app.post('/users', (req, res) => {
    const { name, email } = req.body || {};
    if (!name || !email) {
        return res.status(400).json({ error: 'Nombre y correo son requeridos' });
    }

    // super basico sin validar email unico ni formato
    const newUser = {
        id: nextId++,
        name,
        email,
        createdAt: new Date().toISOString()
    };
    users.push(newUser);
    res.status(201).json({ user: newUser });
});

// DELETE /users/:id
app.delete('/users/:id', (req, res) => {
    const Id = Number(req.params.id);
    users = users.filter(u => u.id !== Id);
    res.status(204).send();
});


//start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
