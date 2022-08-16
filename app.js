const express = require('express');
const hbs = require('hbs'); 
require('dotenv').config();

const app = express();
const port = process.env.PORT;



app.set('view engine', 'hbs');
app.set('views', __dirname + '/public/views');
hbs.registerPartials(__dirname + '/public/views/partials', function (err) {});

// servir contenido statico
app.use(express.static('public'));

app.get('/', (req, res)=> {
  res.render('home',{
    nombre:'Shavi',
    titulo:'Curso de Node'
  });
});

app.get('/generic', (req, res)=> {
  res.render('generic',{
    nombre:'Shavi',
    titulo:'Curso de Node'
  });
  });

  app.get('/elements', (req, res)=> {
    res.render('elements',{
      nombre:'Shavi',
      titulo:'Curso de Node'
    });
  });

  app.get('*', (req, res)=> {
    res.sendFile(__dirname +'/public/404.html')
  });


app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`)
})