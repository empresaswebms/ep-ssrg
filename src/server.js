const express = require('express');
const { appVue, router } = require("./main.js");
const { renderToString } = require('@vue/server-renderer');

const fs = require('fs');
const path = require('path');

const server = express();


server.use('*',async (req, res) =>
{
  // Ruta actual
  router.push(req.url);

  // Esperar a que el router esté listo
  await router.isReady();

  // Renderizar la aplicación a una cadena HTML
  const appContent = await renderToString(appVue);

  console.log("__dirname",__dirname)
  // Plantilla HTML
  const templatePath = path.resolve(__dirname, 'public', 'index.html'); // Ajusta la ruta según tu configuración
  const template = fs.readFileSync(templatePath, 'utf-8');

  // Insertar el contenido de la aplicación en la plantilla
  const html = template.replace(`<!--app-html-->`, appContent);

  // Enviar la respuesta al cliente
  res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
});

// Puerto en el que se ejecutará el servidor
const port = process.env.PORT || 3000;
server.listen(port, () =>
{
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});