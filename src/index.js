const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');

const route = require('./routes');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// midlewere xử lý dữ liệu từ form submit (tích hợp trong express)
app.use(express.urlencoded({extended: true}));

// submit data dạng Json
app.use(express.json());

//HTPP logger 
app.use(morgan('combined'));

//Template engineC: 
app.engine('.hbs', engine({extname: '.hbs'})); 
app.set('view engine', '.hbs'); 
app.set('views', './views'); 
app.set('views', path.join(__dirname, './resources/views'));

route(app);

app.listen(port, () => { 
  console.log(`App listening on port ${port}`);
});