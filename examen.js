require('dotenv').config(); 
const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080; 


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('home', { title: 'Página Principal' });
});

app.get('/pastor_aleman', (req, res) => {
    res.render('pastor_aleman', { title: 'Pastor Alemán' });
});

app.get('/golden', (req, res) => {
    res.render('golden', { title: 'Golden Retriever' });
});

app.get('/pequines', (req, res) => {
    res.render('pequines', { title: 'Pequines' });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
