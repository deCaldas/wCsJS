const path = require("path");

// aquí es donde añadimos nuestras configuraciones
module.exports = {

  // entry nos permite fijar nuestro punto de entrada
  entry: "./src/index.js",

  // output es el lugar a donde enviamos lo que nos prepara webpack (podríamos establecer un directorio, entre otras caracteristicas), aunque webpack ya tiene una caracteristica para esto (dist)
  output: {
    path: path.resolve(__dirname, "dist"),
    
    // utilizamos el `path` requerido de "node" para usar `resolve` que ubica nuestro proyecto
    filename: "main.js",
  },
  resolve: {
    // aquí agregamos las extensiones con las que trabajaremos
    extensions: [".js"]
}}