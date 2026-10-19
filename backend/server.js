const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'API está funcionando',
  });
});

app.get('/api/info', (req, res) => {
  const integrantes = [
    {
      nombre: 'Ana García',
      edad: 20,
      carrera: 'Ingeniería en Sistemas',
      materiasAprobadas: 8,
    },
    {
      nombre: 'Luis Pérez',
      edad: 22,
      carrera: 'Ingeniería en Sistemas',
      materiasAprobadas: 6,
    },
    {
      nombre: 'Sofía López',
      edad: 21,
      carrera: 'Ingeniería en Sistemas',
      materiasAprobadas: 7,
    },
  ];

  res.json({
    message: 'La API está funcionando',
    integrantes,
  });
});

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
