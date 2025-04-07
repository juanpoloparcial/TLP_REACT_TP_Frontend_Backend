const express = require('express');
const app = express();
const port = 3000;

//Escucha la petición del tipo GET en la ruta que le indicamos.
app.get('/saludo/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    res.send(`Hola, ${nombre}!`);
});

//Estará escuchando en el puerto 3000, que definimos en el principio.
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
