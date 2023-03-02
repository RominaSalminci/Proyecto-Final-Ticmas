const express = require ("express");
const path = require ("path");

const app = express();
const publicPath = path.resolve(__dirname,"./public");

app.use(express.static(publicPath));

const port = process.env.PORT || 3030;

app.listen(port,()=>
    console.log ("Servidor corriendo en el puerto http://localhost:" + port)
);

app.get ("/",(req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

