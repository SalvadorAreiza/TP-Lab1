const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/olympicMedals', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const medalSchema = new mongoose.Schema({
    country: String,
    gold: Number,
    silver: Number,
    bronze: Number,
});

const Medal = mongoose.model('Medal', medalSchema);

// Ruta para obtener las medallas
app.get('/api/medals', async (req, res) => {
    const medals = await Medal.find();
    res.json(medals);
});

// Ruta para registrar una nueva medalla
app.post('/api/medals', async (req, res) => {
    const newMedal = new Medal(req.body);
    await newMedal.save();
    res.status(201).json(newMedal);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
