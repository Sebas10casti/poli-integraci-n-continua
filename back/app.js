const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send({
    nombre: 'Integración continua',
    personas: ['Sebastian Castiblanco', 'Walter Berrocal', 'Norma Arias', 'Jhon Sarmiento', 'Lore Uribe']
  });
});

app.listen(PORT, () => {
  console.log(`Servidor Express en ejecución en el puerto ${PORT}`);
});
