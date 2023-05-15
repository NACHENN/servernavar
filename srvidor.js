const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 2500; 

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.render('bienvenido', {title: 'navbar', message: 'Bienvenido a navbar'});
});

app.post('/api/ejemplo', (req, res) => {
  const libro = req.body.libro;
  const lanzamiento = req.body.lanzamiento;
  const editorial = req.body.editorial;
  const autor = req.body.autor
  const origen = req.body.origen
  const tipo = req.body.tipo
  const isbn = req.body.isbn
  const idioma = req.body.idioma
  const apto =req.body.idioma


  console.log('libro:', libro);
  console.log('lanzamiento:', lanzamiento);
  console.log('Correo:', editorial);
  console.log('autor', autor);
  console.log('origen', origen);
  console.log('tipo', tipo);
  console.log('isbn',isbn);
  console.log('idioma',idioma);
  console.log('apto',apto);




  res.send('tratando de encontra el libro');
});


app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
